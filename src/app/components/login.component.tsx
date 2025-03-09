"use client"
import { nunito, ubuntu } from '@/fonts/fonts';
import '../user/user.css';
import Link from 'next/link';
import { handleFormAction } from '../user/submit.action';
import { useActionState } from 'react';


function Loader() {
    return (
        <div className='text- row-start-10 w-[30px] h-[30px]  flex justify-center items-center place-self-center'>
            <span className='loader w-fit h-fit '></span>
        </div>
    )
}

export default function LoginForm() {
    const [data,formAction,state] = useActionState(handleFormAction,false);
    return (
        <div className="w-full h-full p-8 border-theme-form-inputs col-start-1 col-end-13 md:row-start-2 login rounded-md overflow-hidden">
            <div className={`text-4xl ${nunito.className}`}>
                <span>Login</span>
            </div>
            <form  className={`grid grid-cols-1 grid-rows-12 h-fit  ${nunito.className}`}>
                <input type='text' name="user-email" className='row-start-2 border-theme-form-inputs' />
                <input type='text' name="user-password" className='row-start-4 border-theme-form-inputs' />
                <input formAction={formAction} type="submit" className='row-start-6 border-theme-form-inputs'/>
                <span className={`row-start-8 place-self-center ${ubuntu.className}`}>Dont hava an account? <Link href="#">create one</Link></span>
                { state && <Loader/>}
            </form>
        </div>
    )
}