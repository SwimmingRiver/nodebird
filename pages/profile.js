import AppLayout from "../components/AppLayout";
import React from 'react';
import Head from 'next/head';

import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () =>{
    const followerList =[{nickname:"river"},{nickname:"messi"},{nickname:"mbap"}];
    const followingList =[{nickname:"river"},{nickname:"messi"},{nickname:"mbap"}];
    return (
    <>
    <Head>
        <title>내 프로필 | NodeBird</title>
    </Head>
    <AppLayout>
        <NicknameEditForm/>
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>
    </AppLayout>
    </>)
}
export default Profile;