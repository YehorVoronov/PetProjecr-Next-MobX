"use client"
import Image from 'next/image'
import { GrLike } from "react-icons/gr";
import GaleryImg from './GaleryImg';
//import { useObserver } from 'mobx-react-lite';
import { observer } from "mobx-react-lite";
import PhotosStore from "../../components/storeMobX/photos"

export default function Galery() {
  const { photos } = PhotosStore;

  const handleToggleLike = (id) => {
    PhotosStore.toggleLike(id);
  }

  return (
    <div>
      
      <div className='pt-4 flex flex-wrap justify-center'>
        {photos.map(e => (
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
  );
};
// let imgState=[
  //   {src:"/Cyprus-napa-caves.png",alt:"cyprus",width:200,height:48},
  //   {src:"/prague.jpeg",alt:"prague.jpeg",width:200,height:48},
  //   {src:"/France-Paris.webp",alt:"Paris.jpg",width:200,height:48},
  //   {src:"/Germany-Dresd_Zwinger.jpg",alt:"germany.jpg",width:200,height:48},
  //   {src:"/pl-wr.jpg",alt:"pl.jpg",width:200,height:48},
  //   {src:"/Torronto-Main.jpg",alt:"torronto.jpj",width:200,height:48},
  //   {src:"/usa-new-york.jpg",alt:"usa.jpg",width:200,height:48},
  //   {src:"/ukr.jpg",alt:"ukr.jpg",width:200,height:48}
  // ]

// export default function Galery() {
//  debugger
//   const {photos}=PhotosStore;

  
//   return  observer(()=>(<div>
//     <div>
//       carusel
//     </div>
//     <div className='flex flex-wrap justify-center'>
//       {photos.map(e=><GaleryImg isLike={e.isLike} id={e.id} toggleLike={PhotosStore.toggleLike} src={e.src}
//           alt={e.alt}
//           className="dark:invert"
//           width={e.width}
//           height={e.height}/>)}

//     </div>
//   </div>))
// }