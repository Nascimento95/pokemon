import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from './context/User'
import Home from "./Page/Home";
import Login from "./Page/Login";
import NotFound from "./Page/NotFound";
import Nav from "./components/nav";
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  
  return (
    <UserContextProvider>
      <div className="container d-flex justify-content-center" style={{height: "100px !important"}} >
        <div className="row">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route  path="/login" element={<Login/>} />
              <Route  path="*" element={<NotFound/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </UserContextProvider>  
  );
}

export default App