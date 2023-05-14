import Image from 'next/image'
import { IconContext } from "react-icons";
import { GrLocation } from "react-icons/gr";


export default function Intro() {
  return (
  <main style={{ backgroundImage: "url('https://www.pcclean.io/wp-content/uploads/2020/4/YNrM7b.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}  className='p-20 flex bg-blgreen-200 justify-center'>    
            
            <div>
            <Image
              src="/sticker.webp"
              alt="Logo"
              width={200}
              height={48}
              priority
            />
            <div className='text-white  '>
           <div className='text-[32px]  font-bold'> Yehor Voronov</div>
              <div className='flex justify-center'>Frontend Developer</div>
              <div className='flex justify-center'>
                
                <div className='mt-1 '><GrLocation/></div>
                Toronto, Canada</div>
              <div className='flex justify-center'><a href='https://www.linkedin.com/in/yehor-voronov-1a8338225/'>LinkedIn</a></div>
            </div>
              
            </div>

            
    </main>
  )
}
