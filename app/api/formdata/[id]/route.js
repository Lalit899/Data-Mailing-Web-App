import connectMongoDB from "@/app/lib/db";
import { Formdb } from "@/app/model/form";
import { NextResponse } from "next/server";

export async function GET(request,{ params }){
    const {id} = params;
    const idsArray = id.split(',');

    await connectMongoDB();
    const Formdata = await Formdb.find({_id: { $in: idsArray }});
    return NextResponse.json({Formdata},{status:200})
}

export async function PUT(request,{ params }){
    const {id} = params;
    const {
        updatename: name,
        updateemail: email,
        updatehobbies: hobbies,
        updatephone: phone,
    } = await request.json()

    await connectMongoDB();
    await Formdb.findByIdAndUpdate(id, {name,email,hobbies,phone})
    return NextResponse.json({message:"Updated"},{status:200})
}