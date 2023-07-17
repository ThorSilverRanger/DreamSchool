import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import PersonPage from './components/PersonPage';
import BookingForm from './components/BookingForm';
import OurTeachers from './components/OurTeachers';
import Header from './components/Header';
import './styles/styles.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/course/:courseId/person/:personId" element={<PersonPage />} />
        <Route path="/course/:courseId/person/:personId/lesson/:lessonId/booking" element={<BookingForm />} />
        <Route path="/our-teachers" element={<OurTeachers />} />
      </Routes>
    </Router>
  );
};

export default App;
