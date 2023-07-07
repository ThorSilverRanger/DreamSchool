// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';

const courses = [
  { id: 1, title: 'Математика' },
  { id: 2, title: 'Українська мова' },
  { id: 3, title: 'Українська література' },
  { id: 4, title: 'Я досліджую світ' },
  { id: 5, title: 'Біологія' },
  { id: 6, title: 'Історія України' },
  { id: 7, title: 'Географія' },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Наші курси</h1>
      <div className="course-cards">
        {courses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id} className="course-card">
            <h2>{course.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
