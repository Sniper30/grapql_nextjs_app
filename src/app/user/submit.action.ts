"use server"
import { query } from "@/lib/client-graphql";
import { gql } from "@apollo/client";

const LOGIN = gql`
    query log($email: String, $password: String){
        login(email: $email, password: $password){
            email,
            name
        }
    }
`

export async function handleFormAction(state:boolean, form_data:FormData) {

    const email = form_data.get('user-email');
    const password = form_data.get('user-password');
    const {data}= await query({query: LOGIN ,variables:{
        email,
        password
    }})
    return data;
}