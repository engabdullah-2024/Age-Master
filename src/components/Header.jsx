import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
      <Link to="/"> <h1 className="text-2xl font-bold">Age Master</h1></Link> 
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/contact" className="mr-4">Contact</Link>
          <Link to="/calculator">Calculator</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
