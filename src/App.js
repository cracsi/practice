import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Spaces from "./components/spaces";
import SpaceDetail from "./components/spacedetail";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Spaces />} />
         <Route path="/spaces" element={<Spaces />} />
         <Route path="/spaces/:spaceId" element={<SpaceDetail />} />
         <Route path="/spaces/:spaceId/:roomName" element={<SpaceDetail />} />
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
