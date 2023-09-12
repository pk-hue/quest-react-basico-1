import React from 'react';
import './box.css' 

const Box = ({title, content}) => {
  return (
      <div className='box'>
            <h2>{title}</h2>
            <p className='text'>{content}</p>
        </div>
  );
};

export default Box;

