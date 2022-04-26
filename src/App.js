import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import ChosenInfoPage from './Components/ChosenInfoPage';
import { ContextProvider } from './Components/Context';
import ChosenInfo from "./Pages/ChosenInfo";

function App() {
  
 
  return (
<Router>
    <div className="App">
  
  <Link to="/ChosenInfo"><button>Mer info</button></Link>
  <ContextProvider>
      <Routes>
        <Route path="/ChosenInfo" element={<ChosenInfo/>}></Route>
        <Route path='/ChosenInfoPage' element={<ChosenInfoPage />} />
      </Routes>
      </ContextProvider>
    </div>
    </Router>
  );
}

export default App;
