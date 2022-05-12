import React from 'react';

export default function InstructionsForm({ handleSubmit, setInstructionsInput }) {

  return (
    <div className='notes'>Make a request:
      <form onSubmit={handleSubmit} >

        <input onChange={(e) => setInstructionsInput(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}
