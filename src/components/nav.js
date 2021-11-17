import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <nav className="nav">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/login">Login</Link>  
        </nav>
    );
  }
  
  export default Nav