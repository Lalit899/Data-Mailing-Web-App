import connectMongoDB, { connectionsrt } from "@/app/lib/db";
import { Formdb } from "@/app/model/form";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name,email,hobbies,phone} = await request.json();
    await connectMongoDB()
    await Formdb.create({name,email,hobbies,phone});
    return NextResponse.json({message:"created"},{status:201})
}

export async function GET(){
    await connectMongoDB();
    const Formdata = await Formdb.find();
    return NextResponse.json({Formdata})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Formdb.findByIdAndDelete(id);
    return NextResponse.json({message:"deleted"},{status:200})
}