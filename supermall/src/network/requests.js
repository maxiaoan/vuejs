import  axios from 'axios'

//this way is most simple ones
export function request(config) {
    const myAxiosInstance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/w1',
        timeout: 5000
    })
    myAxiosInstance.interceptors.request.use(config => {
        return config
        console.log(config);
    }, err =>{
        console.log(err);
    })
    myAxiosInstance.interceptors.response.use(res => {
        console.log(res);
        return res.data;
    },error => {
        console.log(error);
    })
    return myAxiosInstance(config)
}



