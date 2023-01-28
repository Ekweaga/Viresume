import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"
function Signup() {
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState('')
  const [file,setFile] = useState('')

  return (
    <>
    <div className='flex items-center justify-center '>
  
     <div className='  h-[580px] w-[350px] md:mt-[50px] rounded-md  p-4 flex items-center justify-center flex-col bg-[#51C9FF] shadow-3xl mt-[120px]'>
      <h2 className="font-bold">Viresume</h2>
       <p className='mt-[15px] text-black'>Create an account here</p>
       <div className='text-red-800 '></div>
       <form className='flex flex-col gap-[30px] items-center justify-center mt-[15px]'>
         <div>
           <input type="text" placeholder='your name' className='bg-transparent text-black border-[1px] border-white w-[300px] px-2 h-[40px] focus:outline-none outline-white placeholder-white placeholder:text-sm' value={name} onChange={(e)=>setName(e.target.value)}/>
 
         </div>
         <div>
         <input type="email" placeholder='Email' className='bg-transparent text-black border-[1px] border-white w-[300px] px-2 h-[40px] focus:outline-none outline-white placeholder-white placeholder:text-sm' value={email} onChange={(e)=>setEmail(e.target.value)}/>
         </div>
 
         <div>
         <input type="password" placeholder='your password' className='bg-transparent text-black border-[1px] border-white w-[300px] px-2 h-[40px] focus:outline-none outline-white placeholder-white placeholder:text-sm' value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </div>

       
         <div>
         <button className="bg-[#010D82] text-white w-[280px] rounded-full p-2 font-bold">Submit</button>
         </div>
         <div className="text-black text-sm">
           <p>Already have an account ? <Link href="/Authentication/login"  className='text-[#010D82] font-bold'>Login</Link></p>
         </div>
         <div>
           <p><Link href="/" className="text-black text-sm">Go back home</Link></p>
         </div>
       </form>
 
     </div>
    </div>
   </>
  )
}

export default Signup