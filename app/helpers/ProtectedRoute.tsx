"use client"
import { useRouter } from 'next/navigation'

export const ProtectedRoute = ({children}:{children: React.ReactNode}) => {
    const router = useRouter();
    if(typeof localStorage !== 'undefined'){
        const local = localStorage.getItem("user");
        if(!local){
            router.push("/");
        }
        return children;
    }
};