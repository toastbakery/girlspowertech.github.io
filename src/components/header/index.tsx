import "./style.scss";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/" />
      <div>
        <Link to="/" ><h1>GIRLS POWER TECH</h1></Link>
        <div>
          Create some lightweight, creative, fun, and feminist projects
        </div>
      </div>
    </header>
  );
}

export default Header;
