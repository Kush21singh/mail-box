import React from 'react';
import '../src/css/Sidebaroptions.css';

function Sidebaroptions({ Icon, title, number, isactive }) {
  return (
    <div className={`sidebaroptions ${isactive && 'sidebaroptions--active'}`}>
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  );
}

export default Sidebaroptions;
