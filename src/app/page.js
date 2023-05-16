
import Image from 'next/image'
import Header from './components/Header'
import Intro from './Intro'
import ContentMenu from './ContentMenu'
import Galery from './Body/Galery/Galery'

export default function Home() {
  // let photoArr=[
  //   {isLike:true,src:"/Cyprus-napa-caves.png",alt:"cyprus",width:200,height:48},
  //   {isLike:true,src:"/prague.jpeg",alt:"prague.jpeg",width:200,height:48},
  //   {isLike:true,src:"/France-Paris.webp",alt:"Paris.jpg",width:200,height:48},
  //   {isLike:false,src:"/Germany-Dresd_Zwinger.jpg",alt:"germany.jpg",width:200,height:48},
  //   {isLike:true,src:"/pl-wr.jpg",alt:"pl.jpg",width:200,height:48},
  //   {isLike:true,src:"/Torronto-Main.jpg",alt:"torronto.jpj",width:200,height:48},
  //   {isLike:true,src:"/usa-new-york.jpg",alt:"usa.jpg",width:200,height:48},
  //   {isLike:true,src:"/ukr.jpg",alt:"ukr.jpg",width:200,height:48}
  
  // ]
  let ClientID="0803f555e0a8af22f6c4"

  // const  loginWithGithub=()=>{
  //   alert("fedef")
    
  //   // window.location.assign("https://github.com/login/oauth/authorize?client_id="+ClientID)
  //  };

  // let btClick=()=>{
  //   return(
  //     alert()
  //   )
  // }

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <main>

      

        {/* <Header loginWithGithub={loginWithGithub}/> */}
       <Header/>
        <Intro/>
        <ContentMenu/>
        <div style={{ backgroundImage: "url('https://avatars.mds.yandex.net/i?id=2954b72a8da82a2d6e2e38b556900b066ce5aeab-9147982-images-thumbs&n=13')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}  className='  bg-blgreen-200 '>
        <Galery/>
        </div>
         {/* <button onClick={loginWithGithub}>ll</button>
       */}
    </main>
  )
}
