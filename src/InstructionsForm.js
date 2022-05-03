import React from 'react';
import App from './App';

export default function InstructionsForm({ handleSubmit, setInstructionsInput }) {

  return (
    <div>Special Requests:
      <form onSubmit={handleSubmit} >

        <input onChange={(e) => setInstructionsInput(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}
