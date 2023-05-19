"use client"
import React from "react";
import UsersStore from "./../../components/storeMobX/users";
import { observer } from "mobx-react-lite";
import Image from "next/image";

export default observer(function Following() {
  const { users } = UsersStore;
  const loggedInUser = users.find((user) => user.isLogin);

  const followedByLoggedInUser = loggedInUser.followedBy.map((followedUserId) =>
    users.find((user) => user.id === followedUserId)
  );

  return (
    <div>
      i Following
      {followedByLoggedInUser.map((user) => (
        <div key={user.id}>
          <Image
            key={user.id}
            id={user.id}
            src={user.imgSrc}
            alt={user.imgSrc}
            className="dark:invert"
            width={200}
            height={48}
          />
          {user.id}
        </div>
      ))}
    </div>
  );
});
