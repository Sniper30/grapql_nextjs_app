import { useLazyQuery } from "@apollo/client";
import { SyntheticEvent } from "react";
import { LOGIN } from "../querys/login.query";


export const useLogin = (email: string,password:string)=>{
    const [login,{data,loading,error}] = useLazyQuery(LOGIN);
    return async ()=>{
        await login({variables:{email, password}});
        return {data,loading,error}
    }
}