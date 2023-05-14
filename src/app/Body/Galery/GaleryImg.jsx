import Image from 'next/image'
import { GrLike } from "react-icons/gr";

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
        <button onClick={()=>alert} className='float-right'><GrLike /></button>
      </div>
  )
}