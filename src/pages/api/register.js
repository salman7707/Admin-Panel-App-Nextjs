import { NextResponse } from "next/server"

export default async function RegisterApiHandler(res,req) {
    try {
     const {name, email, password} = await req.json()
     console.log(`name is ${name} email is ${email} password is ${password}`)
     
     return NextResponse.json({message:"request recive successfully"},{status:200})   
    } catch (error) {
        console.log(error,"invalid things")
    }
}
