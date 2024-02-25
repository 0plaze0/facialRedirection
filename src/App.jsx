import "./App.css";
import { VideoPlayer } from "./components";

import { VideoProvider } from "./context/videoContext";

function App() {
  return (
    <div className="app">
      <VideoProvider>
        <VideoPlayer />
      </VideoProvider>
    </div>
  );
}

export default App;
