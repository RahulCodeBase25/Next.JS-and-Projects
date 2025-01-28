import { NextResponse } from "next/server";

export async function POST(request){
    let yeValaData = await request.json()
    console.log(yeValaData);
    
    return NextResponse.json({sucess: true, yeValaData})  //The thing is  muze yha data mai "yeledata" mention karne ki zaroorat bhi nhi vo by default given data lega
}


//This will be my final ouput :-.
// sucess: true, yeValaData: {…}}
// sucess
// : 
// true
// yeValaData
// : 
// {name: 'Rahul', job: 'jobless'}
// [[Prototype]]
// : 
// Object