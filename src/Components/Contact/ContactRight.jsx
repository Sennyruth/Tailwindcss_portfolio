
import { useState } from "react";
const ContactRight = () => {
    const[username,setUsername ] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");
    const[phoneNumber,setPhoneNumber] = useState("");
    const[subject, setSubject] = useState("");
    const[successMsg, setSuccessMsg] = useState("");
    const[error, setError] = useState("");
  
    const handleSubmit = (e)=>{
  e.preventDefault()
  setSuccessMsg("");
    setError(""); 
  if(username===""){
    setError("Username is required")
  }else if
  (phoneNumber===""){
    setError("Phone Number is required")
  }
  else if
    (email===""){
      setError("Email is required")
    }
    else if
    (subject===""){
      setError("Subject is required")
      }
  else if
    (message===""){
      setError("Message is required")
  }
      else{
        setSuccessMsg("Your Message has been sent successfully");
        setUsername("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
        setSubject("");
        setError("");
  
      console.log(username,phoneNumber,email,message,subject);
      
  
      }
    }
  return (
    <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
    <form className="w-full flex flex-col gap-6 py-3">
      {
        error && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">{error}</p>
      }
      {
        successMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">{successMsg}</p>


      }
      <div className="w-full flex gap-10 items-center">
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-sm text-gray-300 uppercase tracking-wide">
            YOUR NAME
          </p>
          <input 
          onChange={(e)=>setUsername(e.target.value)} value={username}
            className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300"
            type="text"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-sm text-gray-300 uppercase tracking-wide">
            phone number
          </p>
          <input
          onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}
            className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-300 uppercase tracking-wide">
          Email
        </p>
        <input
onChange={(e) => setEmail(e.target.value)}
value={email}
className={`w-full h-12 rounded-lg border-b-[1px] ${
error ? "border-red-500" : "border-b-gray-600"
} bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
type="email"
/>
      </div>
      <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-300 uppercase tracking-wide">
          subject
        </p>
        <input
        onChange={(e)=>setSubject(e.target.value)} value={subject}
          className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300"
          type="email"
        />
      </div>
      <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-300 uppercase tracking-wide">
          your message
        </p>
        <textarea 
        onChange={(e)=>setMessage(e.target.value)} value={message}
         className="w-full  rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none" cols="30" rows="8" ></textarea>
      </div>
      <div className="w-full">
        <button onClick={handleSubmit} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-300 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">send message</button>
      </div>
      {
        error && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">{error}</p>
      }
       {
        successMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">{successMsg}</p>


      }
    </form>
  </div>
  )
}

export default ContactRight
