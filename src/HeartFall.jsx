import React, { useEffect } from 'react';

const HeartFall = ({ emoji }) => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = emoji; 

      const startX = Math.random() * window.innerWidth;
      const endX = Math.random() * window.innerWidth;

      snowflake.style.left = `${startX}px`;
      snowflake.style.fontSize = `${Math.random() * 20 + 10}px`; 
      try {
        const snowflakesContainer = document.getElementById('snowflakes-container');
        snowflakesContainer.appendChild(snowflake);
      } catch (error) {
        
      }


      snowflake.addEventListener('animationiteration', () => {
        snowflake.style.left = `${endX}px`;
      });

      setTimeout(() => {
        snowflake.remove();
      }, 6000); 
    };

    const snowfallInterval = setInterval(createSnowflake, 100);

    return () => clearInterval(snowfallInterval);
  }, []);

  return (
    <div className="snowfall">
      <div id="snowflakes-container">
      </div>
    </div>
  );
};

export default HeartFall;