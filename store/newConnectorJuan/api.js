import axios from "axios"
const newConnectorJuan = axios.create({
  baseURL: "http://google.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
