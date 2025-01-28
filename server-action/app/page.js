"use client"

import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
   <div className="w-2/3 mx-auto my-10">
    <form ref={ref} action={submitAction} >
      <div>
        <label htmlFor="name">Name:-</label>
        <input className="text-black mx-6" name="name" id="name" type="text"  />
      </div>
      <div  className="my-4" >
      <label htmlFor="add">Address:-</label>
        <input className="text-black mx-6" name="add" id="add" type="text"  />
        </div>
        <div>
        <button className="my-4 px-4 py-4 border-2 border-white">Submit this info</button>
        </div>
    </form>
   </div>
  );
}
