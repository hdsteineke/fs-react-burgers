import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      <h3>Your requests:</h3>
      {instructions.map((instruction, index) => 
        <Instruction key={instruction + index} instruction={instruction} />)}
    </section>
  );
}
