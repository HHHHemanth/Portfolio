"use client"
import React, { useState } from 'react'; 
import Image from 'next/image'
import Link from 'next/link'

{/* colors = ["#B0E9FF", "#9130FF", "#0D82FF", "#0D25FF"], */}
const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submission
        const data = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };
        
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";  // Ensure you're sending to the correct endpoint
      
        const options = {
          method: "POST",  // Ensure POST is used
          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,  // Include the JSON data in the body
        };
      
        const response = await fetch(endpoint, options);
        const resData = await response.json();
      
        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
        }
      };
      
  
    return (
        <section className="relative grid md:grid-cols-2 my-12 py-24 gap-4">
            


            <div className="bg-[radial-gradient(ellipse_at_center,_#0D82FF,_#9130FF)] rounded-full h-80 w-80 z-0 blur-2xl absolute -bottom-30 -left-50"></div>

            
            {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      



            
            <div>       
                <h5 className="text-xl font-bold text-white my-2">
                    Let's Connect!
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="socials flex flex-row gap-4">
                    <Link href="https://github.com/HHHHemanth" target="_blank" passHref>
                        <div className="w-8 h-8 relative">
                            <Image
                                src="/images/email/github.png"
                                alt="GitHub"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/hemanth-s-7b418a245/" target="_blank" passHref>
                        <div className="w-8 h-8 relative">
                            <Image
                                src="/images/email/lnkin.png"
                                alt="LinkedIn"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Right Section (Form) */}
            <form className="flex flex-col gap-4 z-1">
                {/* <div className='mb-4'> */}
                    <label htmlFor="email" className="text-white block mt-2 mb-0 text-sm font-medium">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder="hs@gmail.com"
                        className="p-3 rounded-md bg-[#18191E] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-white"
                    />
                {/* </div> */}
                {/* <div className='mb-4'> */}
                    <label htmlFor="subject" className="text-white block mt-2 mb-0 text-sm font-medium">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        required
                        placeholder="Add subject here"
                        className="p-3 rounded-md bg-[#18191E] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-white"
                    />
                {/* </div> */}
                {/* <div className='mb-6'> */}
                    <label htmlFor="message" className="text-white block mt-2 mb-0 text-sm font-medium">
                        Message
                    </label>
                    <textarea name='message' id='message' className='p-3 rounded-md bg-[#18191E] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-white'
                    placeholder="Let's talk about..."/>
                    {/* <input
                        type="text"
                        id="message"
                        required
                        placeholder="Add message here"
                        className="p-3 rounded-md bg-[#18191E] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-white"
                    /> */}
                {/* </div> */}
                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#B0E9FF] via-[#9130FF] to-[#0D25FF] text-white py-3 rounded-full hover:opacity-90 transition duration-300 font-semibold"
                >
                    Submit
                </button>
            </form>
            

        </section>
    )
}

export default EmailSection
