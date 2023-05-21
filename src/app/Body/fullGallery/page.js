'use client'

import React from "react";
import Galery from "../Galery/Galery";
import PhotosStore from "../../components/storeMobX/photos"
import Carousel from "@/app/components/carousel/carousel";
import { observer } from "mobx-react-lite";

export default observer( function FullGallery(){
  const { photos } = PhotosStore;
  //const { photos } = PhotosStore;

  return(
    <div>
       {/* <Image
          src={props.src}
          alt={props.alt}
          className="dark:invert"
          width={props.width}
          height={props.height}
          priority
          
        /> */}
      
      {/* <Carousel photos={photos} />
       */}
       <div className="p-[100px]">
       <Carousel photos={photos} />

       </div>
      <Galery />
      
    </div>
  )
})