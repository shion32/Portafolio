import React from 'react';

export const Header = () => {
  return (
    <div id='home' className='header'>
     <img className="florG" src="/img/florGrande.png" alt="Flor Grande" />
     <img className="florP" src="/img/florPequeña.png" alt="Flor Pequeña" />
      <div className='letra2'>
        <h2>holaa, soy Anny Montaño software developer</h2>
        <div className='letra'>
          <h6>"Codifica tu futuro, depura tus límites."</h6>
        </div>
      </div>
    </div>
  );
};