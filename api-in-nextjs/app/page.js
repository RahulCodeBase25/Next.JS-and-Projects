"use client"

export default function Home() {

  const handleMyClick = async() =>{
    let yeValaData = {
      name : "Rahul",
      job : "jobless"
    }
   let getMyRoute= await fetch("/api/add", {method : "POST" , headers:{"Content-Type": "application/json" },
     body: JSON.stringify(yeValaData)
  })
  let res = await getMyRoute.json()
  console.log(res);
  
   
}

  return (
   <div>
    <h1 className="text-purple-800 text-2xl bg-lime-300">This is a demo related to learning Api routes</h1>
    <button onClick={handleMyClick}>Click me!!!</button>
   </div>
  );
}
