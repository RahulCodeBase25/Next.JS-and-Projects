"use server"
import fs from "fs/promises"


export const submitAction= async(e) =>{
    console.log(e.get("name") , e.get("add"));
    
   let a =await fs.writeFile("Rahul.txt" , `Name of the form "user" is "${e.get("name")}" and and the "address"of that user is "${e.get("add")}"`)
   console.log(a);
  }