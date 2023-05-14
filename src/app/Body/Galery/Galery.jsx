"use client"
import Image from 'next/image'
import { GrLike } from "react-icons/gr";
import GaleryImg from './GaleryImg';

export default function Galery() {
 
  let imgState=[
    {src:"/Cyprus-napa-caves.png",alt:"cyprus",width:200,height:48},
    {src:"/prague.jpeg",alt:"prague.jpeg",width:200,height:48},
    {src:"/France-Paris.webp",alt:"Paris.jpg",width:200,height:48},
    {src:"/Germany-Dresd_Zwinger.jpg",alt:"germany.jpg",width:200,height:48},
    {src:"/pl-wr.jpg",alt:"pl.jpg",width:200,height:48},
    {src:"/Torronto-Main.jpg",alt:"torronto.jpj",width:200,height:48},
    {src:"/usa-new-york.jpg",alt:"usa.jpg",width:200,height:48},
    {src:"/ukr.jpg",alt:"ukr.jpg",width:200,height:48}
  ]
  return (<div>
    <div>
      carusel
    </div>
    <div className='flex flex-wrap justify-center'>
      {imgState.map(e=><GaleryImg src={e.src}
          alt={e.alt}
          className="dark:invert"
          width={e.width}
          height={e.height}/>)}

    </div>
  </div>)
}