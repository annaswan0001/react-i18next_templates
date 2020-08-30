import React, {Suspense}from 'react';
import { useTranslation, initReactI18next, } from "react-i18next";
import logo from './logo.svg';


const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App () {


 const {t,i18n} = useTranslation(["nav","product"]); //use several files with translation

                            
  return (
    <Suspense fallback={<Loader />}>

    <div>
      <button onClick={() => i18n.changeLanguage('ru')}>ru</button>
      <button onClick={() => i18n.changeLanguage('ar')}>ar</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <button onClick={() => i18n.changeLanguage('tr')}>tr</button>
      <h1>{t('nav:APPLICATIONS')}</h1>
      <h1>{t('product:NAME')}</h1>

    </div>
    </Suspense>
  )
}

export default App;
