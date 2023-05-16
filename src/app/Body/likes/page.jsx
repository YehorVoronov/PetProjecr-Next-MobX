"use client"
import React from "react";
import GaleryImg from '../Galery/GaleryImg';
import { observer } from "mobx-react-lite";
import PhotosStore from "../../components/storeMobX/photos"


export default  observer(function Likes(){
  const { photos } = PhotosStore;

  const handleToggleLike = (id) => {
    PhotosStore.toggleLike(id);
  }

  return(
    <div>
      <div className='pt-3 flex flex-wrap justify-center'>
         {photos.filter(e=>e.isLike==true).map(e => (
           <GaleryImg
             key={e.id}
             isLike={e.isLike}
             id={e.id}
             toggleLike={handleToggleLike}
             src={e.src}
             alt={e.alt}
             className="dark:invert"
             width={e.width}
             height={e.height}
           />
         ))}
       </div>
    </div>
  )
}
)

// "use client"

