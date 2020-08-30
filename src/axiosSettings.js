import axios from 'axios';

const setLang = lang => {
  if (lang) {
    axios.defaults.headers.common["Accept-Language"] = lang
  } else {
    // Delete auth header
    axios.defaults.headers.common["Accept-Language"] = "en"
  }
};

export default setLang;