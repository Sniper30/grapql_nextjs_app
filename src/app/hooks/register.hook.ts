'use client'
import { IUser } from "@/interfaces/user.interface";
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
 mutation reg($email: String,$password: String,$name: String,$phone: String) {
        register(
          email: $email,
          password: $password,
          name: $name,
          phone: $phone
          ){
            user {
              name
              email
              phone
            }
            token
        }
    }
`
export  function useHandleRegister(user:IUser){
        const [register,{data,loading}] =  useMutation(REGISTER)
        return async ()=> {
           await register({variables:user});
            return {data, loading}
        }
    }