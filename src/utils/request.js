
import axios from "axios"
const service = axios.create()
service.defaults.baseURL = process.env.API_ROOT
service.defaults.headers.post["Content-Type"] = "application/json"

    // 添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应数据做点什么
    if (response.data.rc === 1001) {
        return 
    }
    return response
}, (error) => {
    // 对响应错误做点什么
    // console.log(error.response.status)
    if (error.response.status == 401) {
        
    } else if (error.response.status == 403) {
        
    } else if (error.response.status == 404) {
        
    } else if (error.response.status == 500) {
       
    }
    return Promise.reject(error)
})
export default service