// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MathematicsCourse from './components/Course';
import './styles/styles.scss';
import PersonPage from './components/PersonPage';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<MathematicsCourse />} />
        <Route path="/course/:courseId/person/:personId" element={<PersonPage />} />
        <Route path="/course/:courseId/person/:personId/lesson/:lessonId/booking" element={<BookingForm />} />
        {/* Add routes for other courses */}
      </Routes>
    </Router>
  );
};

export default App;
