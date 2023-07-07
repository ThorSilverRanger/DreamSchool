import React from 'react';
import '../styles/Welcome.scss';

const Welcome: React.FC = () => {
  return (
    <div className="welcome">
      <div className="welcome-text">
        <p className="quote">«Інвестиції у знання платять найкращі дивіденди»</p>
        <p className="author">— Бенджамін Франклін (Benjamin Franklin)</p>
      </div>
      <div className="welcome-photo">
        <img src="/img/welcome.png" alt="Welcome" />
      </div>
    </div>
  );
};

export default Welcome;