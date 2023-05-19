"use client"
import Image from 'next/image'
//import { useObserver } from 'mobx-react-lite';
import { observer } from "mobx-react-lite";
import UsersStore from "../../components/storeMobX/users"

export default observer(function Users() {
  const { users } = UsersStore;

  // users = [
  //   { isLogin: true, id: 1, followedUsers: [2, 3], imgSrc: "/sticker.webp", alt: "UserId", width: 200, height: 48 },
  //   { isLogin: false, id: 2, followedUsers: [], imgSrc: "/sticker2.webp", alt: "UserId", width: 200, height: 48 },
  //   { isLogin: false, id: 3, followedUsers: [], imgSrc: "/sticker2.webp", alt: "UserId", width: 200, height: 48 },
  // ]

  return (
    <div>

      <div className='pt-4 flex flex-wrap justify-center'>
        
        {users.map(e => (<div>
          <Image
            key={e.id}
            id={e.id}
            src={e.imgSrc}
            alt={e.imgSrc}
            className="dark:invert"
            width={200}
            height={48}
          />
          {
          
          e.isFollow?<button>unFollow</button>:<button>follow</button>}

        </div>


        ))}

      </div>
    </div>
  );
});
