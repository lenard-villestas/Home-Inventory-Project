import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import InventoryRow from "./InventoryRow";


const InventoryList = () => {
    const [inv, setInv] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/inventory/")
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
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    <tbody>{DataTable()}</tbody>
                </Table>
            </div>
            <div>
                <Link to={"/create-item/"}
                    className="createItem">
                    Add item
                </Link>
            </div>
        </div>
    )
};