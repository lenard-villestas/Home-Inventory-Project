import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import "./LanguageToggle.css";

const lngs = {
  true: { nativeName: 'English' },
  false: { nativeName: 'French' }
};

const LanguageToggle = ({ label }) => {
  const { t, i18n } = useTranslation();
  return (
    <label className="switch">
        <input type="checkbox" id="lng_toggle" onClick={() => {
            var checked = document.getElementById('lng_toggle').checked;
            if (checked) {
              i18n.changeLanguage("fr");
              console.log("FRENCH");
              if (document.getElementById('lng_toggle_signup')) {
              document.getElementById('lng_toggle_signup').checked = true;
              }
            } else {
              i18n.changeLanguage("en");
              console.log("ENGLISH");
              if (document.getElementById('lng_toggle_signup')) {
                document.getElementById('lng_toggle_signup').checked = false;
              }
            }
        }}></input>
        <span className="slider"/>
    </label>
  );
};

export default LanguageToggle;

