import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import backgroundImage from '../assets/herobg.png'; // Add your background image path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State to store the modal message (success/fail)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qd9apir', 'template_80q33fy', e.target, '8yx9uwkODDYAM1vIm')
      .then((result) => {
        console.log(result.text);
        setModalMessage('Message sent successfully!');
        setIsModalOpen(true); // Show success modal
      }, (error) => {
        console.log(error.text);
        setModalMessage('Failed to send message. Please try again later.');
        setIsModalOpen(true); // Show failure modal
      });
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when user clicks the button
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4">{modalMessage}</h2>
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
  