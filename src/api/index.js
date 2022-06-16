import axios from "axios";
// import Cookies from "js-cookie";

const baseURL = process.env.REACT_APP_API_URL
// const baseURL = 'https://103.138.189.99/'
export const Api = axios.create({
    baseURL:baseURL,
    timeout:5000,
    headers:{
        'Content-Type': 'application/json',
        accept : 'application/json',
    },
})

export {ContactUS, PostComment, Subscribe, GetClientsReview, GetBlogs, GetComments} from './Components.api'