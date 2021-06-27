const API_URL = 'https://api.elcoma.com.br/api/visits';
import axios from 'axios';
import Cookies from 'js-cookie';
// prettier-ignore
export default () => {
    return axios.create({
        baseURL: API_URL,
        headers: { Authorization: Cookies.get('token') }
    });
}