import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import NotFound from "./Page/NotFound";
import Nav from "./components/nav";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
const App = () => {
  return (
    <div className="container d-flex justify-content-center" style={{height: "100px !important"}} >
      <div className="row">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/login" component={Login} />
            <Route  path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App