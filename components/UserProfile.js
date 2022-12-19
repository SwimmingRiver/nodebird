import React,{useCallback} from "react";
import { Avatar, Card, Button } from 'antd';

const UserProfile =({setIsLoggedIn})=>{
    const onLogOut = useCallback(()=>{
        setIsLoggedIn(false);
    },[])
    return(
        <Card
        actions={[
            <div key="twit">Jack <br/></div>,
            <div key="following">팔로잉 <br/></div>,
            <div key="follower">팔로워 <br/></div>,
        ]}>

        <Card.Meta
        avatar={<Avatar>RIV</Avatar>}
        title="River"
        />
        <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}
export default UserProfile;