import React, { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {

       const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")



const save = async()=>{
  const res =await fetch("http://localhost:3000/",{
    method:"POST", headers: { "Content-Type": "application/json" },
     body: JSON.stringify({url:url,shorturl:shorturl }) 
    })
const data = await res.json();
console.log("lu",data)

 toast('Save to Database ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
            });
}



  return (
    <>
    <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
             <ToastContainer />
    <div className='items-center bg-blue-900 w-[30vw] h-[75vh] rounded-md mx-auto mt-24 '>

      <div className="text-center">

        <h1 className='text-xl p-2  text-white'> <span className='text-blue-500'>&lt;</span>Short<span className='text-blue-500 font-bold'>URL/&gt;</span></h1>
<div className="flex flex-col items-center gap-3 mt-4">
<input  onChange={e=>{seturl(e.target.value)}} value={url} placeholder='Write your urlname ' type='text' className='bg-blue-100  font-bold text-center p-1 w-[25vw] text-black  '/>
<input  onChange={e=>{setshorturl(e.target.value)}} value={shorturl} placeholder='Write your url' type='text' className='bg-blue-100 font-bold text-center p-1 w-[25vw] text-black'/>
<button className='bg-blue-500 px-14 rounded-full  p-1' onClick={save}>Save</button>
</div>
      </div>
          
     
    </div>
    </>
  )
}

export default Manager
