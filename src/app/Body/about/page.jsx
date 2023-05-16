"use client"
import Header from "@/app/components/Header";
import React from "react";
import {AiOutlineCheck, AiOutlineMail,AiFillGithub,AiFillLinkedin } from "react-icons/ai";


export default function About(){
  return(
    <div className="pt-5 pb-5 pl-[40px]">
      <div className=" font-medium text-[5vw]">Summary</div>
      <div className="font-medium text-[4vw]">Contact</div>
      <div className="mt-5 flex items-center text-white p-2 bg-black mr-[40px] h-[50px]">
        <AiOutlineMail/><div className="pl-2">yehorvoronov70@gmail.com</div>
      </div>
      <div className="mt-7 text-[40px] flex  items-center text-white p-2 bg-black mr-[40px] h-[50px]">
        <a href="https://github.com/YehorVoronov"><AiFillGithub/></a> <a href="https://www.linkedin.com/in/yehor-voronov-1a8338225/"><AiFillLinkedin/></a>
      </div>
      <div className="mt-7 text-[4vw]">
        Hiring info
      </div>
      <div className=" text-[2vw]">
        Interested in:
      </div>
      <div className="mt-7 text-[20px] flex  items-center text-white p-2 bg-black mr-[40px] h-[50px]">
        <div className="flex">
          <AiOutlineCheck/>Full Time Employment
        </div>
        <div className="flex ml-[20%]">
        <AiOutlineCheck/>Freelance          
        </div>
      </div>
    </div>
  )
}