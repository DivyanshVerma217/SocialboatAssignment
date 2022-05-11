import React, { useEffect, useRef } from "react";
import "./video.css";

export const Video = ({ ele }) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.load();
  }, [ele.video]);

  return (
    <video ref={videoRef} controls className="videoDivOne">
      <source src={ele.video} />
    </video>
  );
};
