import { FaInfoCircle, FaCalendarAlt, FaBirthdayCake, FaCalculator } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
<Header/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        <FaInfoCircle className="inline-block text-blue-600 mr-2" /> About This App
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        The Age Master App is designed to help users determine their exact age based on their birth date. 
        It can calculate your current age, show your next birthday, and display other useful information like today's date.
      </p>

      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center mb-4">
          <FaCalendarAlt className="text-blue-500 mr-3" size={30} />
          <p className="text-xl text-gray-800">
            Enter your birth date to calculate your exact age in years.
          </p>
        </div>

        <div className="flex items-center mb-4">
          <FaBirthdayCake className="text-pink-500 mr-3" size={30} />
          <p className="text-xl text-gray-800">
            Get the exact date of your next birthday.
          </p>
        </div>

        <div className="flex items-center mb-4">
          <FaCalculator className="text-green-500 mr-3" size={30} />
          <p className="text-xl text-gray-800">
            Use the calculator for quick and accurate age results.
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mt-6 text-center">
        Whether you’re curious about your age or just want to know when your next birthday is, this app provides the information you need with ease.
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
