import axios from 'axios';

const url = 'http://localhost:8000';
//data chng
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${url}/login`, data)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}
export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}
export const payUsingPaytm= async (data)=>{
    try {
        let response= await axios.post(`${url}/payment`,data);
        return response.data;
    } catch (error) {
        console.log("Error While Calling Payment API",error);
    }
}