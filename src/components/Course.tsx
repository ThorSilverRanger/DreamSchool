import React from 'react';
import { useParams, Link } from 'react-router-dom';
import coursesData from '../courses.json';
import '../styles/Course.scss';

interface Lesson {
  id: number;
  date: string;
  time: string;
}

interface Person {
  id: number;
  name: string;
  lessons: Lesson[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  photo: any;
}

interface Course {
  id: number;
  title: string;
  persons: Person[];
}

const MathematicsCourse: React.FC = () => {
  const { courseId } = useParams<{ courseId?: string }>();

  if (!courseId) {
    return <div>Course ID not provided</div>;
  }

  // Find the specific course by id
  const course: Course | undefined = coursesData.courses.find((c) => c.id === parseInt(courseId, 10));

  // If the course is not found or no persons provide the course, return the corresponding message
  if (!course || course.persons.length === 0) {
    return <div>No one provides this type of course</div>;
  }

  // Get the persons who provide the course
  const persons: Person[] = course.persons;

  return (
    <div className="mathematics-course">
      <h2>{course.title}</h2>
      <div className="persons">
        {persons.length > 0 ? (
          <ul className='wrapper'>
            {persons.map((person: Person) => (
              <li key={person.id}>
                  <Link to={`/course/${courseId}/person/${person.id}`} className="person-link">   
                <img src={person.photo} className='person-photo-sm'></img> {person.name} 
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No one provides this type of course</p>
        )}
      </div>
    </div>
  );
};

export default MathematicsCourse;