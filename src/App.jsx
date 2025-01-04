import AudioPlayer from "./Components/AudioPlayer"
import Main from "./Components/Main"
import Sidebar from "./Components/Sidebar"


function App() {
  
  return (
    <div className="bg-black p-2">
    <Sidebar />
    <Main />
    <AudioPlayer />
     
    </div>
    )
}

export default App
