import React from 'react';
import { useWizard } from 'react-use-wizard';
import '../App.css'

function Headerwizard({ visitedSteps }) {
  const { goToStep } = useWizard();

  return (
    <div className="headbuttons">
      <div className="btn-line">
        <button className="button" onClick={() => goToStep(0)}>Step 1</button>
        <div className="line" style={{ visibility: visitedSteps.has(1) ? 'visible' : 'hidden' }}></div>
      </div>
      <div className="btn-line">
        <button className="button" disabled={!visitedSteps.has(1)} onClick={() => goToStep(1)}>Step 2</button>
        <div className="line" style={{ visibility: visitedSteps.has(2) ? 'visible' : 'hidden' }}></div>
      </div>
      <div className="btn-line">
        <button className="button" disabled={!visitedSteps.has(2)} onClick={() => goToStep(2)}> Review</button>
        
      </div>
    </div>
  );
}

export default Headerwizard;
