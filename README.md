1) Setting i18js
2) add one ore several files with translation
3) 
const {t,i18n} = useTranslation();//if project has 1 namespace for translate
const {t,i18n} = useTranslation(["nav","product"]); //use several files with translation


<h1>{t('APPLICATIONS')}</h1> //one namespace
<h1>{t('nav:APPLICATIONS')}</h1>//several namespace