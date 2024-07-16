import {fetchWrapper} from '../utils/fetch.wrapper'

export function getLoginData(body){
    return fetchWrapper.AllMethods(`http://localhost:3014/api/v1/auth/login`, body,"POST")
}

export function getRegisterData(body){
    return fetchWrapper.AllMethods(`http://localhost:3014/api/v1/auth/register`, body, "POST")
}

export function getEmployeeData(body){
    return fetchWrapper.AllMethods(`http://localhost:3014/api/v1/auth/get_employee_data`,body,"POST")
}

export function logout(){
    return fetchWrapper.get(`http://localhost:3014/api/v1/auth/logout`)
}

export function deleteUser(body){
    return fetchWrapper.AllMethods(`http://localhost:3014/api/v1/auth/delete_user`, body, "PUT")
}

export function updateUserData(body){
    return fetchWrapper.AllMethods(`http://localhost:3014/api/v1/auth/update_user`, body, "PATCH")
}