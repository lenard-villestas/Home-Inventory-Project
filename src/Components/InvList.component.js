import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import InventoryRow from "./InventoryRow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './extra.css';

const InventoryList = () => {
    const { t } = useTranslation();
    const [inv, setInv] = useState([]);
    let user = JSON.parse(localStorage.getItem('user'));
    let id = user.id;
    useEffect(() => {
        axios
            .get("http://localhost:4000/inventory/get-list/" + id)
            .then(({ data }) => {
                setInv(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return inv.map((res, i) => {
            return <InventoryRow obj={res} key={i} />;
        });
    };
    
    

    return (
        <div>
            <div className="table-wrapper">
                <h1>{t('inventory.inventoryList')}</h1>
                <Table striped bordered hover>
                    <thead style={{color: "lightblue",backgroundColor:"#151159"}}>
                        <tr>
                            <th>{t('inventory.category')}</th>
                            <th>{t('inventory.name')}</th>
                            <th>{t('inventory.price')}</th>
                            {/**<th>{t('inventory.owner')}</th>*/}
                            <th>{t('inventory.tools')}</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor: "#528cff"}}>{DataTable()}</tbody>
                </Table>
            </div>
            <div >
                <Link to={"/inventory/create-item"}
                
                    ><button className="createItem">
                        {t('inventory.addItem')}
                    </button>
                    
                </Link>
            </div>
        </div>
    )
};

export default InventoryList;