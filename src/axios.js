import axios from "axios";
const instancess = axios.create({ baseURL: "https://api.themoviedb.org/3" });
export default instancess;
