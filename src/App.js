import './App.css'
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import VideoCard from "./components/VideoCard";


function App() {

  return (
    <div className="container">

      <Header />
      <FilterBar />
      <VideoCard />
    </div>
  );
}

export default App;
