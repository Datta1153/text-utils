// import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=>{

      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }

  return (

    <>
    <Router>
      <Navbar title="Textutils" aboutText="About" />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
         <Route exact path="/" element={<TextForm showAlert={showAlert}heading="Enter the text to analyze below"/>   }>
       
        </Route>

  </Routes>
         </div>
        </Router>
       
       
    </>
  );
}

export default App;
