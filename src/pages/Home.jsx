import { FaCalculator } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Header/>

    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Age Master App</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        This application allows you to calculate your exact age, compare your birthdate with today, and find out when your next birthday is.
      </p>
      <div className="flex items-center justify-center">
        <FaCalculator className="text-blue-500 mr-2" size={30} />
        <p className="text-xl font-semibold text-blue-600">Start calculating your age now!</p>
      </div>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        <Link to="/calculator">Go to Age Master</Link>
      </button>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
