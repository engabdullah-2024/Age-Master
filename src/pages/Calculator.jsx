import { useState } from 'react';
import { FaCalendarAlt, FaBirthdayCake, FaCalendarCheck } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Calculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [nextBirthday, setNextBirthday] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);

    // Save the current date for display
    setCurrentDate(today.toLocaleDateString());

    // Calculate the difference in years
    let age = today.getFullYear() - birth.getFullYear();

    // Adjust the age if the birthdate hasn't occurred yet this year
    const monthDifference = today.getMonth() - birth.getMonth();
    const dayDifference = today.getDate() - birth.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    setAge(age);

    // Calculate the next birthday
    const nextBirthYear = today.getMonth() > birth.getMonth() || 
                         (today.getMonth() === birth.getMonth() && today.getDate() > birth.getDate())
                         ? today.getFullYear() + 1
                         : today.getFullYear();
    const nextBirthDate = new Date(nextBirthYear, birth.getMonth(), birth.getDate());
    setNextBirthday(nextBirthDate.toLocaleDateString());
  };

  return (
    <div>
        <Header/>

    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Age Master</h2>
      <div className="flex items-center">
        <FaCalendarAlt className="mr-2" />
        <input 
          type="date" 
          value={birthDate} 
          onChange={(e) => setBirthDate(e.target.value)} 
          className="block w-full p-2 border mb-4"
          />
      </div>
      <button onClick={calculateAge} className="bg-blue-500 text-white px-4 py-2 flex items-center">
        <FaCalendarCheck className="mr-2" /> Calculate Age
      </button>

      {age !== null && (
          <div className="mt-4">
          <p className="text-xl">
            <FaCalendarCheck className="inline mr-2" /> Your age is: {age} years
          </p>
          <p className="text-gray-600">
            <FaCalendarAlt className="inline mr-2" /> Your birth date: {birthDate}
          </p>
          <p className="text-gray-600">
            <FaCalendarAlt className="inline mr-2" /> Current date: {currentDate}
          </p>
          <p className="text-green-600 text-xl mt-4">
            <FaBirthdayCake className="inline mr-2" /> Your next birthday is on: {nextBirthday}
          </p>
        </div>
      )}
    </div>
    <Footer/>
      </div>
  );
};

export default Calculator;
