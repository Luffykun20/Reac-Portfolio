import { Link } from "react-router-dom";

function Navigation() {
    return (
      <div>
          <nav>
            <Link to = "/header">About Me</Link>
            <Link to = "/footer">Contact Me</Link>
          </nav>
  
      </div>
    );
  }
  
  export default Navigation;