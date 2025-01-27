import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-5vh flex items-center justify-center min-h-2vh">
      <div className="flex flex-col items-center justify-center p-4 w-60 h- rounded-lg shadow-lg bg-gray-100">
        <Image 
          className="w-64 rounded-md mb-4" width={100} height={100} 
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Centered Image"
        />
        <p>I am a Home page</p>
      </div>
    </div>
  );
}

