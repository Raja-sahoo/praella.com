import { Product } from "./component/Product";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"
import { MadeForYou } from "./component/MadeForYou";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return ( 
    <div className="main">
      <BrowserRouter>
      <Product/>
      <MadeForYou/>
      <ToastContainer/>
      </BrowserRouter>

    </div>
  );
}

export default App;