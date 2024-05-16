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