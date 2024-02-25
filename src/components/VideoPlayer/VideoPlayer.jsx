import { useRef, useEffect, useContext } from "react";
import { VideoContext } from "../../context/videoContext";

const VideoPlayer = () => {
  const { videoRef } = useContext(VideoContext);

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
