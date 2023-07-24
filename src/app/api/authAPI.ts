import { IUser } from "../../utils/auth.interface";
import axiosClient from "../axiosClient";

const AuthenticationApi = {
    login: (params: IUser) => {
        const url = '/login';
        return axiosClient.post(url, params);
    },
    register: (params: IUser) => {
        const url = '/register';
        return axiosClient.post(url, params);
    },
    logout: () => {
        const url = '/logout';
        return axiosClient.get(url);
    },
    getAccountInfor: () => {
        const id = localStorage.getItem("user_id");
        let url = ""
        if (localStorage.getItem("user_role") === 'teacher') {
            url = `/teacher/${id}`;
        }
        else{
            url = `/student/${id}`;
        }
        return axiosClient.get(url);
    }
}

export default AuthenticationApi;