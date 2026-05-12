'use client'
import { UpdataUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';


const ProfilePage = () => {

  const userData = authClient.useSession();
  // console.log(userData, "userData");
  const user = userData.data?.user
  console.log(user, "user");

  return (
    <div>
      <Card className='max-w-2xl mx-auto flex flex-col items-center border my-8'>
        <Avatar className='h-20 w-20 rounded-full'>
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>

        <h2 className='text-xl font-bold'>{user?.name}</h2>
        <p className='text-muted'>{user?.email}</p>
        <UpdataUserModal></UpdataUserModal>
      </Card>
    </div>
  );
};

export default ProfilePage;