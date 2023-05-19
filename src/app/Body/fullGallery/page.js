'use client'

import React from "react";
import Galery from "../Galery/Galery";
import PhotosStore from "../../components/storeMobX/photos"
import Carousel from "@/app/components/carousel/carousel";

export default function FullGallery(){

  //const { photos } = PhotosStore;
  const images = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' }
  ];
 let photos = [
    {id:1, isLike: true, src: "/Cyprus-napa-caves.png", alt: "cyprus", width: 200, height: 48 },
    { id:2,isLike: false, src: "/prague.jpeg", alt: "prague.jpeg", width: 200, height: 48 },
    {id:3, isLike: true, src: "/France-Paris.webp", alt: "Paris.jpg", width: 200, height: 48 },
    {id:4, isLike: true, src: "/Germany-Dresd_Zwinger.jpg", alt: "germany.jpg", width: 200, height: 48 },
    {id:5, isLike: true, src: "/pl-wr.jpg", alt: "pl.jpg", width: 200, height: 48 },
    {id:6, isLike: true, src: "/Torronto-Main.jpg", alt: "torronto.jpj", width: 200, height: 48 },
    {id:7, isLike: true, src: "/usa-new-york.jpg", alt: "usa.jpg", width: 200, height: 48 },
    {id:8, isLike: true, src: "/ukr.jpg", alt: "ukr.jpg", width: 200, height: 48 }

  ]

  return(
    <div>
      
      {/* <Carousel photos={photos} />
       */}
      <Galery/>
      
    </div>
  )
}