import React, { useState } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

const MeetingPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 537589115;
        const serverSecret = "385a5daa5f3196e4751dc07df4adebae";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Ritesh Maurya");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        })
    }
    return (
        <div className='room-page'>
           <div className='room' ref={myMeeting}/>
        </div>
    )
}

export default MeetingPage