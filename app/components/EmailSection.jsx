"use client";
import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';

const EmailSection = () => {
    return (
        <section className="relative grid md:grid-cols-2 my-12 py-24 gap-4" id="contact">
            <div className="bg-[radial-gradient(ellipse_at_center,_#0D82FF,_#9130FF)] rounded-full h-80 w-80 z-0 blur-2xl absolute -bottom-10 -left-55"></div>

            {/* Left Section */}
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
            <form
                className="flex flex-col gap-4 z-1"
                action="https://formspree.io/f/xbloddap"
                method="POST"
            >
                <label htmlFor="email" className="text-white block mt-2 mb-0 text-sm font-medium">
                    Your Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="hs@gmail.com"
                    className="p-3 rounded-md bg-[#18191E] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-white"
                />

                <label htmlFor="subject" className="text-white block mt-2 mb-0 text-sm font-medium">
                    Subject
                </label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="Add subject here"
                    className="p-3 rounded-md bg-[#18191E] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-white"
                />

                <label htmlFor="message" className="text-white block mt-2 mb-0 text-sm font-medium">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    required
                    className="p-3 rounded-md bg-[#18191E] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Let's talk about..."
                />

                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#B0E9FF] via-[#9130FF] to-[#0D25FF] text-white py-3 rounded-full hover:opacity-90 transition duration-300 font-semibold cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default EmailSection;
