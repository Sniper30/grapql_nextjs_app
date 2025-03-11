'use client'
import { nunito, ubuntu } from "@/fonts/fonts";
import { Loader } from "./loader.component";
import Link from "next/link";

import { useHandleRegister } from "../hooks/register.hook";
import { SyntheticEvent, useState } from "react";

export function RegisterUserForm() {
    const [vars,setVars] = useState({name:"",password:"",email:"",phone:""})
    const register =useHandleRegister(vars)
    const _handleRegister =async ()=>{
       const {data} = await register();
       console.log(data)
    }
    return (
        <div className="w-full h-full p-8 border-theme-form-inputs col-start-1 col-end-13 md:row-start-2 login rounded-md overflow-hidden">
        <div className={`text-4xl ${nunito.className} font-black h-[100px] overflow-auto`}>
            <span>Login</span>
        </div>
        <form className={`grid grid-cols-1 grid-rows-12 h-fit gap-5 ${nunito.className} font-extralight`}>
            <input type='text' onChange={(e)=> setVars({...vars,name:e.target.value})} name="user-name" placeholder="Usename" className='row-start-2 border-theme-form-inputs' />
            <input type='text' onChange={(e)=> setVars({...vars,email:e.target.value})} name="user-email" placeholder="Email" className='row-start-3 border-theme-form-inputs' />
            <input type='text' onChange={(e)=> setVars({...vars,password:e.target.value})} name="user-password" placeholder="Password" className='row-start-4 border-theme-form-inputs' />
            <input type='text' onChange={(e)=> setVars({...vars,phone:e.target.value})} name="user-phone" placeholder="Phone number" className='row-start-5 border-theme-form-inputs' />
            <input onClick={_handleRegister} type="submit" className='row-start-6 border-theme-form-inputs font-medium'/>
            <span className={`row-start-8 place-self-center ${ubuntu.className}`}>Dont hava an account? <Link href="#">create one</Link></span>
            { 
            false &&  
            <div className='text- row-start-10 w-[30px] h-[30px] flex justify-center items-center place-self-center'>
                <Loader />
            </div>
            }
  
        </form>
        <div>

    </div>
    </div>
    )
}