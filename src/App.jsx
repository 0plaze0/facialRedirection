import { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

import { instructions } from "./constants/instruction";
import "./App.css";

function App() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [start, setStart] = useState(false);

  // LOAD FROM USEEFFECT
  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  // OPEN YOU FACE WEBCAM
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        console.log(currentStream);
        console.log(videoRef.current);
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // LOAD MODELS FROM FACE API

  const loadModels = () => {
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();
      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      faceapi.matchDimensions(canvasRef.current, {
        width: 940,
        height: 650,
      });
      const resized = faceapi.resizeResults(detections, {
        width: 940,
        height: 650,
      });
      faceapi.draw.drawDetections(canvasRef.current, resized);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
      if (detections.length) {
        setInterval(() => {
          RedirectSite();
        }, 5000);
      }
    }, 1000);
  };

  const RedirectSite = () => {
    const success = document.getElementById("app__detection");
    success.innerHTML =
      "Successfully detected User, Redirecting to Portfolio.....";
    setInterval(() => {
      window.location.href = "https://akashbanikdev.netlify.app/";
    }, 5000);
  };

  return (
    <div className="app">
      <div className="app__container">
        {start ? (
          <>
            <h1 className="app__heading">Face Detection</h1>
            <div className="app__video">
              <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
            </div>
            <canvas
              ref={canvasRef}
              width="940"
              height="650"
              className="app__canvas"
            />
            <p id="app__detection"></p>
          </>
        ) : (
          <>
            <div className="app_info">
              <h1 className="app__heading">Face Detection</h1>
              <p className="app__text">
                You will be redircted to Home Page after sitting properly in
                front of the webcam with Your facial traits clearly visible
              </p>
              <h2 className="app__heading">
                Instructions for Proper Sitting Position
              </h2>

              <ol>
                {instructions.map((item) => (
                  <li className="app__text" key={item.id}>
                    <strong>{item.instruction}</strong> : {item.description}
                  </li>
                ))}
              </ol>
            </div>
            <button className="app__start" onClick={() => setStart(true)}>
              Ok
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
