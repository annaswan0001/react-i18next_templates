import React, { Suspense } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import logo from "./logo.svg";
import './App.css'
import setLang from './axiosSettings'
import axios from 'axios'


const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {

  const { t, i18n } = useTranslation(["nav", "product"]); //use several files with translation

  const changeLng = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang)
    document.documentElement.lang = lang
    
    
  };


  return (
    <Suspense fallback={<Loader />}>
      {console.log(axios.defaults.headers.common["Accept-Language"])}
      <div>
        <button onClick={() => changeLng("ru")}>ru</button>
        <button onClick={() => changeLng("ar")}>ar</button>
        <button onClick={() => changeLng("en")}>en</button>
        <button onClick={() => changeLng("tr")}>tr</button>
        <h1>{t("nav:APPLICATIONS")}</h1>
        <h1>{t("product:NAME")}</h1>
      </div>
    </Suspense>
  );
}

export default App;
