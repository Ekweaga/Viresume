import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"
import { Validations } from './validation'
import {signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../components/firebase"
function Signup() {
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState('')
  const [file,setFile] = useState('');
  const [success,setSuccess] = useState("");
  const [loading,setLoading] = useState(false)
  const provider = new GoogleAuthProvider();

const googleSignUp=async ()=>{
  await signInWithPopup(auth,provider).then((user)=>{
   
    localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
    
  })
}


  const submit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    if(!name || !email || !password){
      setError("Check For Empty Fields");
      setLoading(false)
      return;
    }
if((Validations.email[1].pattern).test(email) ){
      email.trim();
       setLoading(false);
     
    
    }

    //if((Validations.password[1].pattern).test(email) === false ){
      //  setError("Password must include at least an uppercase letter, a lowercase, a symbol and a digit")
       // setLoading(false);
     
   // }
    if(password.length < 8){
      setError("Password must have more than 8 characters")
       setLoading(false);
    
    }

    else{
      try{
        await createUserWithEmailAndPassword(auth,email,password).then((response)=>{
          setSuccess("Your Account is created successfully")
          setEmail('')
          setPassword('')
          setName('')
          setLoading(false)
          console.log(response.user.refreshToken)
          localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
         
          
        });
      }
      catch(err){
        if(err.message == "Invalid input"){
          setError(err.message)
        }
      }
    }
  }

  return (
    <>
    <div className='flex items-center justify-center '>
  
     <motion.div className='  h-[580px] w-[350px] md:mt-[50px] rounded-md  p-4 flex items-center justify-center flex-col bg-[#51C9FF] shadow-3xl mt-[120px]' initial={{opacity:0,x:200}} animate={{opacity:1,x:0}} transition={{duration:0.3,damping:2000,ease:'easeInOut'}} >
      <h2 className="font-bold">Viresume</h2>
       <p className='mt-[15px] text-black'>Create an account here</p>
       <div className='text-red-800 font-bold'>{error ? (<motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.4}}>{error}</motion.p>):null}</div>
       <form className='flex flex-col gap-[30px] items-center justify-center mt-[15px]' onSubmit={submit}>
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
         <div className='mt-[20px] text-black'>{loading ? (<p>Loading....</p>):null}</div>
         <div className="text-black text-sm">
           <p>Already have an account ? <Link href="/Authentication/login"  className='text-[#010D82] font-bold'>Login</Link></p>
         </div>
         <div>
           <p><Link href="/" className="text-black text-sm">Go back home</Link></p>
         </div>
       </form>
 
     </motion.div>
    </div>
   </>
  )
}

export default Signup