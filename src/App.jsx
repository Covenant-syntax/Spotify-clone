/** @format */

import AudioPlayer from "./Components/AudioPlayer";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className='bg-black p-2 flex flex-col'>
      <div className="flex w-full h-[90%]">
        <Sidebar />
        <Main />
      </div>
      <AudioPlayer />
    </div>
  );
}

export default App;
