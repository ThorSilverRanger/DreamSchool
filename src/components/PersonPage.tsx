import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../courses.json';
import '../styles/PersonPage.scss';

interface Lesson {
  id: number;
  date: string;
  time: string;
}

const PersonPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { courseId, personId } = useParams<{ courseId: any; personId: any }>();

  // Find the course by courseId
  const course = coursesData.courses.find((c) => c.id === parseInt(courseId, 10));

  if (!course) {
    return <div>Course not found</div>;
  }

  // Find the person by personId within the course
  const person = course.persons.find((p) => p.id === parseInt(personId, 10));

  if (!person) {
    return <div>Person not found</div>;
  }

  // Get the person's information
  const { name, photo, lessons } = person;

  // Navigate to the BookingForm component
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  // Handle booking a lesson
  const handleBookLesson = (lesson: Lesson) => {
    navigate(`/course/${courseId}/person/${personId}/lesson/${lesson.id}/booking`, { state: { lesson } });
  };

  return (
    <div className="person-page">
      <h1>{name}</h1>
      {photo ? (
        <img src={photo} alt="Person" className="person-photo" />
      ) : (
        <div className="person-photo-placeholder">Placeholder</div>
      )}
      <h2>Забронювати заняття</h2>
      <ul className="lesson-list">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="lesson-item">
            <button className="lesson-button" onClick={() => handleBookLesson(lesson)}>
              Date: {lesson.date}, Time: {lesson.time}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonPage;
