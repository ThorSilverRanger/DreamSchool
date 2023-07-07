import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/BookingForm.scss';

const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [date, setDate] = useState(location.state?.lesson.date || '');
  const [time, setTime] = useState(location.state?.lesson.time || '');
  const [showModal, setShowModal] = useState(false); // State variable for controlling the modal visibility

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can access the form input values from the component state
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Additional Details:', additionalDetails);
    console.log('Date:', date);
    console.log('Time:', time);

    // Reset form input values
    setName('');
    setPhone('');
    setEmail('');
    setAdditionalDetails('');
    setDate('');
    setTime('');

    // Display the success modal
    setShowModal(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setShowModal(false);
    navigate('/'); // Redirect to home or desired page after closing the modal
  };

  return (
    <div>
    <h2>Зарезервувати заняття</h2>
    <form className="booking-form" onSubmit={handleSubmit}>
    
      <div className="form-field">
          <label htmlFor="date">Дата:</label>
          <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)} readOnly required />
          <label htmlFor="time">Час:</label>
          <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} readOnly required />
        </div>
      <div className="form-field">
        <label htmlFor="name">Ваше ім'я:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="phone">Телефон:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-field">
        <label htmlFor="additional-details">Додаткова інформація:</label>
        <textarea className='textarea'
          id="additional-details"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          
        />
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Ваша заявка відправлена. Скоро з вами з'вяжеться ваш викладач.</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <div>
      <button className="submit-button" type="submit">Зарезервувати</button>
      </div>
    </form>
    </div>
  );
};

export default BookingForm;
