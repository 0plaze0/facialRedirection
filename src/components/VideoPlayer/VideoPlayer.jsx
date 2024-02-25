import { useRef, useEffect } from "react";

const VideoPlayer = () => {
  const videoRef = useRef();

  useEffect(() => {
    startVideo();
    videoRef;
  });

  const startVideo = async () => {
    try {
      const currentStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      console.log(currentStream);
      videoRef.current.srcObject = currentStream;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="app__videoPlayer">
      <video
        ref={videoRef}
        crossOrigin="anonymous"
        autoPlay
        muted
        width="940"
        height="650"
      ></video>
    </div>
  );
};

export default VideoPlayer;
