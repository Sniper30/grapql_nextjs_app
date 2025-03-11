"use client"
import { nunito, ubuntu } from '@/fonts/fonts';
import '../user/user.css';
import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';
import { Loader } from './loader.component';
import { useLogin } from '../hooks/login.hook';
import { useRouter } from 'next/navigation';

export default function LoginUserForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter()
    const login = useLogin(email,password);
    const handleLogin = async (e:SyntheticEvent) =>{
        e.preventDefault();
        const {data,error} = await login();
        console.log(data,error," <===");
        router.refresh();
    }

    return (
        <div className="w-full h-full p-8 border-theme-form-inputs col-start-1 col-end-13 md:row-start-2 login rounded-md overflow-hidden">
            <div className={`text-4xl ${nunito.className} font-black`}>
                <span>Login</span>
            </div>
            <form  className={`grid grid-cols-1 grid-rows-12 h-fit  ${nunito.className}`}>
                <input type='text' onChange={(e)=>setEmail(e.target.value)} name="user-email" className='row-start-2 border-theme-form-inputs' />
                <input type='text' onChange={(e)=>setPassword(e.target.value)} name="user-password" className='row-start-4 border-theme-form-inputs' />
                <input onClick={handleLogin} type="submit" className='row-start-6 border-theme-form-inputs'/>
                <span className={`row-start-8 place-self-center ${ubuntu.className}`}>Dont hava an account? <Link href="#">create one</Link></span>
                { 
                false &&  
                <div className='text- row-start-10 w-[30px] h-[30px] flex justify-center items-center place-self-center'>
                    <Loader />
                </div>
                }
                <div>

                </div>
            </form>
        </div>
    )
}