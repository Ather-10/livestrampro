import React, { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

export default function Room() {
  const { roomID } = useParams();
  const containerRef = useRef(null);
  const zpRef = useRef(null);
  const [role, setRole] = useState(null);

  const startMeeting = (selectedRole) => {
    setRole(selectedRole);
  };

  useEffect(() => {
    if (!roomID || !containerRef.current || role === null) return;

    const appID = 1522382931;
    const serverSecret = "cfc16fb87a3898d62c49af8ac13d2e33";
    const userID = randomID(5);
    const userName = `User_${randomID(3)}`;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    zpRef.current = ZegoUIKitPrebuilt.create(kitToken);

    const baseLink = `${window.location.origin}${window.location.pathname}?roomID=${roomID}`;
    const hostLink = `${baseLink}&role=Host`;
    const audienceLink = `${baseLink}&role=Audience`;

    let sharedLinks = [];
    if (role === ZegoUIKitPrebuilt.Host) {
      sharedLinks.push({ name: "Host link", url: hostLink });
      sharedLinks.push({ name: "Audience link", url: audienceLink });
    } else if (role === ZegoUIKitPrebuilt.Audience) {
      sharedLinks.push({ name: "Audience link", url: audienceLink });
    }

    zpRef.current.joinRoom({
      container: containerRef.current,
      config: { role },
      sharedLinks,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });

    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
      }
    };
  }, [roomID, role]);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      {role === null ? (
        <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md text-center space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800">
            Select Your Role to Go Live
          </h2>
          <p className="text-gray-500">Choose how you want to join the stream</p>
          <div className="space-y-4">
            <button
              onClick={() => startMeeting(ZegoUIKitPrebuilt.Host)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-200"
            >
              🎥 Join as Host
            </button>
            <button
              onClick={() => startMeeting(ZegoUIKitPrebuilt.Cohost)}
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md transition duration-200"
            >
              🎤 Join as Cohost
            </button>
            <button
              onClick={() => startMeeting(ZegoUIKitPrebuilt.Audience)}
              className="w-full py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow-md transition duration-200"
            >
              👀 Join as Audience
            </button>
          </div>
        </div>
      ) : (
        <div
          className="w-full h-full"
          ref={containerRef}
        ></div>
      )}
    </div>
  );
}

function randomID(len) {
  let result = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
