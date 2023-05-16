import Image from 'next/image'
import { GrLike } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";


export default function GaleryImg(props){
  return(
    <div>
        <Image
          src={props.src}
          alt={props.alt}
          className="dark:invert"
          width={props.width}
          height={props.height}
          priority
          
        />
        
        <button onClick={()=>props.toggleLike(props.id)} className='float-right'>{props.isLike?<AiFillLike/>:<GrLike />}</button>
      </div>
  )
}