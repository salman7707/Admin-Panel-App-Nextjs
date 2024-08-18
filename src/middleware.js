import { NextResponse } from "next/server";

export default function middleware (request){
   const usertoken = request.cookies.get("token")
   const url = request.nextUrl.clone();
   if(usertoken && (url.pathname === "/login" || url.pathname === "/" )){
      url.pathname = '/dashboard';
      return NextResponse.redirect(url)
   }

   if(!usertoken && (url.pathname === '/dashboard' || url.pathname === '/profile') ){
       url.pathname = '/login'
       return NextResponse.redirect(url)
   }

   return NextResponse.next()
}
export const config ={
    matcher:['/:path*']
}
