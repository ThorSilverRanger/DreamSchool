import React from 'react';
import '../styles/Home.scss';
import Welcome from './Welcome';
import SchoolCourses from './SchoolCourses';
import ArtCourses from './ArtCourses';

const Home: React.FC = () => {

  return (
    <div>
      <Welcome />
      <SchoolCourses />
      <ArtCourses />
    </div>
  );
};

export default Home;
