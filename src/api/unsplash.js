import axios from 'axios';




const api_key = 'Client-ID 47e804ca062d65ad9145828e147fa0e223b797c97e0ac4ac8f879a6065f1acb1';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{  
        Authorization: api_key},
        
           
});