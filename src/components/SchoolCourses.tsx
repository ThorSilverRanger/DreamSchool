import React from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../courses.json';
import '../styles/Home.scss';

const SchoolCourses: React.FC = () => {
  const courses = coursesData.courses.filter((course) => course.section === 'Шкільний');

  return (
    <div>
      <h1>Шкільні курси</h1>
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

export default SchoolCourses;
