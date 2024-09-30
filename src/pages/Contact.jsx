import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div>

<Header/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        We would love to hear from you! Feel free to reach out to us for any questions, suggestions, or feedback.
      </p>

      <div className="flex flex-col space-y-6 items-start">
        <div className="flex items-center">
          <FaPhoneAlt className="text-green-500 mr-4" size={30} />
          <p className="text-xl text-gray-800">+252 613169435 </p>
        </div>

        <div className="flex items-center">
          <FaEnvelope className="text-blue-500 mr-4" size={30} />
          <p className="text-xl text-gray-800">info@agemaster.com</p>
        </div>

        <div className="flex items-center">
          <FaMapMarkerAlt className="text-red-500 mr-4" size={30} />
          <p className="text-xl text-gray-800">Ceelasha Biyaha</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mt-6 text-center">
        We strive to respond to all inquiries within 24 hours. Your feedback helps us improve our app!
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
