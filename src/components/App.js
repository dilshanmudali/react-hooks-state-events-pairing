import video from "../data/video.js";
import Video from './Video.js'
import MainContent from './MainContent'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video appData = {video}/> 
      <MainContent appData = {video}/>
      <hr></hr>

    </div>
  );
}

export default App;
