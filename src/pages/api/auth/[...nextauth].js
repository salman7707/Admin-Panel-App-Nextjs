import MongoDb from "@/lib/mongodb.mjs";
import User from "@/models/user";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export const authentication = {
  providers:[
     CredentialsProvider({
        name:"credentials",
        credentials:{},
        async authorize(credentials){
           const {email, password}=credentials          
           try {
            await MongoDb();
            const user = await User.findOne({ email });
            if(!user){
               throw new Error("User not Exsists")
            };
            const passwordMatch = await bcrypt.compare(password, user.password)
            if(!passwordMatch){
               throw new Error("Password not matched")
            } 
            console.log("Data Fetch Successfully ")

            // NextResponse.cookies.set('token',token,{httpOnly:true,path:'/'});
            return {id: user._id, name: user.name, email: user.email}
           } catch (error) {
            console.log("Error in data fetching",error)
           }
        }
     }) 
     
  ],
  callbacks: {
   async jwt({ token, user }) {
     if (user) {
       token.id = user.id;
       token.email = user.email;
       token.name = user.name;
     }
     return token;
   },
   async session({ session, token }) {
     session.user = {
       id: token.id,
       email: token.email,
       name: token.name,
     };
     return session;
   }
 },
  session:{
     strategy: "jwt",
  },
  pages:{
   signIn:"/login"
  },
  cookies: {
   sessionToken: {
     name: `token`,
     options: {
       httpOnly: true,
       sameSite: 'lax',
       path: '/',
       secure: true,
       maxAge:3600
     }
   },
 }
};
const handler = nextAuth(authentication)
export default handler;