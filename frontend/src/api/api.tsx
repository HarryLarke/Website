import axios from "axios"


const api = axios.create({
    baseURL: 'https://webpage-server.onrender.com'
})

export default api 

//Maybe send email here??! Or put into a hook???
//This URL will be different once it's deployed!!!  