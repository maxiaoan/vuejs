import {request} from "./requests";

export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })

}