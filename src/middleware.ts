import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function Middleware(request:NextRequest) {
    const cookie = await cookies();
    const token = cookie.get('user');  
    console.log(token)
    if(!token && (request.nextUrl.pathname.startsWith('/user/login') || request.nextUrl.pathname.startsWith('/user/register') )) return NextResponse.next()
    if(!token && (!request.nextUrl.pathname.startsWith('/user/login') || !request.nextUrl.pathname.startsWith('/user/register'))) return NextResponse.redirect(new URL('/user/login',request.url))
        if(token && (request.nextUrl.pathname.startsWith('/user/login') || request.nextUrl.pathname.startsWith('/user/register'))) return NextResponse.redirect(new URL('/',request.url))
    return NextResponse.next();
}

export const config = {
    matcher:[
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}