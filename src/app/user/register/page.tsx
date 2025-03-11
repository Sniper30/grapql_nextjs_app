
import { RegisterUserForm } from "@/app/components/register.component";
import '../user.css';
export default async function LoginPage() {
    return (
        <div className="grid grid-cols-12 md:grid-rows-[100px_auto_100px] w-full h-full relative">
           <RegisterUserForm/>
        </div>
    )
}