"use client"
import React from "react";
import UsersStore from "./../../components/storeMobX/users";
import { observer } from "mobx-react-lite";
import Image from "next/image";

export default observer(function Followers() {
  const { users } = UsersStore;

  return (
    <div>
      Followers

      {users
        .filter((e) => e.isLogin === true)
        .map((e) => (
          <div key={e.id}>
            {e.followedUsers.map((followedUser) => (
              <div key={followedUser - 1}>
                <Image
                  key={users[followedUser - 1].id}
                  id={users[followedUser - 1].id}
                  src={users[followedUser - 1].imgSrc}
                  alt={users[followedUser - 1].imgSrc}
                  className="dark:invert"
                  width={200}
                  height={48}
                />
                {followedUser}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
});
