import Image from 'next/image'
import Link from 'next/link'

export default function ContentMenu() {
  return (
  <main className='shadow bg-black text-white grid bg-black- justify-center'>    
            
            <div className='space-x-4' >
           <Link href="/">Gallery</Link>
           <Link href="Body/about">About</Link>
           <Link href="Body/likes">Likes</Link>
           <Link href="Body/users">Users</Link>
           <Link href="Body/following">Following</Link>
           <Link href="Body/followers">Followers</Link>
           <Link href="Body/chalenges">Chalenges</Link>
            </div>

            
    </main>
  )
}
