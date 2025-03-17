'use client';

import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from '@livekit/components-react';

import '@livekit/components-styles';

import { useEffect, useState } from 'react';
import { Track } from 'livekit-client';
import SimpleVoiceAssistance from './SimpleVoiceAssistance';

const VoiceAssistant = () =>  {
  // TODO: get user input for room and name
  const room = 'quickstart-room';
  const name = 'quickstart-user';

  return (
    <div className='h-[90%] border-1 border-solid border-gray-500 rounded-sm m-1 p-2 bg-white w-full'>
    <LiveKitRoom
      serverUrl="wss://test-app-ne6dttu8.livekit.cloud"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDMwMzU4MzIsImlzcyI6IkFQSVB2Y1hMNkZSV0FKOCIsIm5iZiI6MTc0MjAzNTgzMiwic3ViIjoiMTAiLCJ2aWRlbyI6eyJjYW5QdWJsaXNoIjp0cnVlLCJjYW5QdWJsaXNoRGF0YSI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJyb29tIjoiQ2hpcmFnIiwicm9vbUpvaW4iOnRydWV9fQ.y0ZAR3PC7CYSd7yEs3Pc4jDanTSKTL9CmawA7ySmaaY"
      video={false}
      connect={true}
      audio={true}
      // onDisconnected={() => }
      data-lk-theme="default"
      className='flex h-12 justify-center'
      style={{ 
        backgroundColor: 'white',
        '--lk-background-color': 'white'
      } as React.CSSProperties}
    >
      <RoomAudioRenderer />
      <SimpleVoiceAssistance/>
    </LiveKitRoom>
    </div>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );
  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}
// const VoiceAssistant = () => {
//   return (
//     <div>
//         video Assistant

//     </div>
//   )
// }

export default VoiceAssistant