
import { Suspense } from "react";
import LoginUserForm from "../../components/login.component";

export default async function LoginPage() {
    return (
        <div className="grid grid-cols-12 md:grid-rows-[150px_auto_150px] w-full h-full relative">
           <LoginUserForm/>
        </div>
    )
}