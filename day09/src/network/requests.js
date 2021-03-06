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
//
//
//
// export function request(config) {
// return new Promise((resolve,reject) =>{
//     const myAxiosInstance = axios.create({
//         baseURL:'http://123.207.32.32:8000/api/v2',
//         timeout:5000
//     })
//     myAxiosInstance(config )
//         .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })
// })
// }





// export function request(config) {
//     const myAxiosInstance = axios.create({
//         baseURL:'http://123.207.32.32:8000/api/v2',
//         timeout:5000
//     })
//     myAxiosInstance(config.baseConfig)
//         .then(res =>{
//             // console.log(res);
//             config.success(res);
//         })
//         .catch(err =>{
//             // console.log(err);
//             config.failure(err)
//         })
// }




// export function request(config, success, failure) {
//     const myAxiosInstance = axios.create({
//         baseURL:'http://123.207.32.32:8000/api/v2',
//         timeout:5000
//     })
//     myAxiosInstance(config)
//         .then(res =>{
//             // console.log(res);
//             success(res);
//         })
//         .catch(err =>{
//             // console.log(err);
//             failure(err)
//         })
// }


