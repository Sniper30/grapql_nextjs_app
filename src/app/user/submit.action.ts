"use server"
import { query } from "@/lib/client-graphql";
import { gql } from "@apollo/client";
import { cookies,headers } from "next/headers";
import { LOGIN } from "../querys/login.query";

export async function handleFormAction(state:boolean, form_data:FormData) {
    const cookie = await cookies();
    const header = await headers();
    const email = form_data.get('user-email');
    const password = form_data.get('user-password');
    const {data}= await query({query: LOGIN ,variables:{
        email,
        password
    }})
    // cookie.set('user',data.login.token,{
    //     httpOnly: true, // to disable accessing cookie via client side js
    //     //secure: true, // to force https (if you use it)
    //     maxAge: 1000000, // ttl in seconds (remove this option and cookie will die when browser is closed)
    //     // secure:true,
    //     path:'/'
    // })
    return data;
}