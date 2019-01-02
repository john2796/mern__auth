import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply authorizatoin token to every request if loggedi n
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};