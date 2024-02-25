import { createContext, useRef } from "react";

export const VideoContext = createContext({});

export const VideoProvider = ({ children }) => {
  const videoRef = useRef();
  const model = "ehllo";
  return (
    <VideoContext.Provider value={{ videoRef }}>
      {children}
    </VideoContext.Provider>
  );
};
