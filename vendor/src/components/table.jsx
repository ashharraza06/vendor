import React, {  useState } from 'react';
import { Wizard } from 'react-use-wizard';
import Poheader from './Poheader';
import Complaint from './Complaint';
import Review from './Review';
import Headerwizard from './Headerwizard';
import Footerwizard from './Footerwizard';


const Table = () => {
  // Get selectedRow and setSelectedRow from context
  const [visitedSteps, setVisitedSteps] = useState(new Set([0])); // Track visited steps

  const handleStepChange = (step) => {
    setVisitedSteps((prev) => new Set(prev).add(step));
    console.log(step) // Add the new step to the set
  };

  return (
    <Wizard
      onStepChange={(step) => handleStepChange(step)}
      header={<Headerwizard visitedSteps={visitedSteps} />}
      footer={<Footerwizard />} // Footer now doesn't need props
    >
      <Poheader />  
      <Complaint />  
      <Review />
    </Wizard>
  );
};

export default Table;
