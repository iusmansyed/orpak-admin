import {Route,Routes,Navigate} from "react-router-dom"
import './App.css';
import Login from "./Pages/Login/index"
import MobileUser from "./Pages/Mobileuser/index.jsx"
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  return (
    <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/mobileuser" element={<MobileUser/>}/>

    </Routes>
  );
}

export default App;
