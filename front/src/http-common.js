import axios from "axios";

// axios как redux отправляет запросы на api

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});