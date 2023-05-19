import { makeAutoObservable } from "mobx";
import { action } from "mobx";

class UsersStore {
  users = [
    {isFollow:true,isLogin:false,id:1,followedBy:[2], followedUsers:[2,3], imgSrc: "/sticker.webp", alt: "UserId", width: 200, height: 48 },
    {isFollow:false,isLogin:false,id:2,followedBy:[1], followedUsers:[3], imgSrc: "/sticker2.webp", alt: "UserId", width: 200, height: 48 },
    {isFollow:true,isLogin:true,id:3,followedBy:[1,2], followedUsers:[1], imgSrc: "/sticker2.webp", alt: "UserId", width: 200, height: 48 },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  newUser(users) {
    this.users.push(users);
  }
  addUser(currentUserId, followedUserId) {
    const currentUser = this.users.find((user) => user.id === currentUserId);
    if (currentUser && !currentUser.followedUsers.includes(followedUserId)) {
      currentUser.followedUsers.push(followedUserId);
    }
  }
  removeFollowedUser(currentUserId, followedUserId) {
    const currentUser = this.users.find((user) => user.id === currentUserId);
    if (currentUser) {
      const followedUserIndex = currentUser.followedUsers.indexOf(followedUserId);
      if (followedUserIndex > -1) {
        currentUser.followedUsers.splice(followedUserIndex, 1);
      }
    }
  }

  toggleFollow(id) {
    if (!this.users) {
      return;
    }
    action(() => {
      const user = this.users.find(e => e.id === id);
      if (user) {
        user.isFollow = !users.isFollow;
      }
    })();
  }
  
  
  // toggleLike(id) {
    
  //   if (!this.photos) {
  //     return;
  //   }
  //   action(() => {
  //     const photo = this.photos.find(e => e.id === id);
  //     if (photo) {
  //       photo.isLike = !photo.isLike;
  //     }
  //   })();
  // }


}

export default new UsersStore();

