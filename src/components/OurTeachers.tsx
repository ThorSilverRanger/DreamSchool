import React from 'react';
import coursesData from '../courses.json';
import '../styles/OurTeachers.scss';

interface Lesson {
  id: number;
  date: string;
  time: string;
}

interface Person {
  id: number;
  name: string;
  photo: string;
  lessons: Lesson[];
}

const OurTeachers: React.FC = () => {
  const persons: Person[] = coursesData.courses.reduce(
    (acc: Person[], course) => [...acc, ...course.persons],
    []
  );

  return (
    <div className="our-teachers">
      <h1>Наші педагоги</h1>
      <div className="teacher-list">
        {persons.map((person) => (
          <div className="teacher-block" key={person.id}>
            <img className="teacher-photo" src={person.photo} alt={person.name} />
            <div className="teacher-info">
              <h2 className="teacher-name">{person.name}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam, nesciunt dignissimos animi necessitatibus architecto suscipit magnam, voluptatem tempora accusamus eum consectetur rem libero laborum, tempore optio ex alias blanditiis accusantium voluptate sit excepturi ratione aliquid? Veritatis dolore qui blanditiis.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeachers;
