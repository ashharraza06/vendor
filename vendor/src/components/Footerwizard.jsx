import React, { useContext } from 'react';
import { useWizard } from 'react-use-wizard';
import RowContext from '../context/selectedrow/RowContext';

const Footerwizard = () => {
  const {  isLastStep, isFirstStep, previousStep, nextStep } = useWizard();
  const { selectedRow } = useContext(RowContext); // Get selectedRow from context

  return (
    <div className="footerbuttons">
      <button className="footbuttons" onClick={previousStep} disabled={isFirstStep}>
        Back
      </button>
      <button className="footbuttons" onClick={nextStep} disabled={isLastStep || !selectedRow}>
        Next
      </button>
    </div>
  );
};

export default Footerwizard;
