import React, { useState } from 'react';
import Boxsecond from './components/box/box-second';
import Box from './components/box/box';
import './components/button/button.css'



const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button className='btn' onClick={handleClick}>Motrar texto</button>
      {showComponent ?  <Box title='Parágrafo abaixo' content="lorem ipsum dolor sit amet consectetur adipisicing elit. fugit dolorum quasi voluptatum id tenetur delectus tempore enim officiis corrupti, unde ea est quidem earum" /> :   <Boxsecond title='Parágrafo abaixo' content='lorem ipsum dolor sit amet consectetur adipisicing elit. fugit dolorum quasi voluptatum id tenetur delectus tempore enim officiis corrupti, unde ea est quidem earum'/>}
    </div>
  );
};

export default App;
