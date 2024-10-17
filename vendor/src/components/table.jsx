import React, { useState } from 'react';
import { Wizard } from 'react-use-wizard';
import Poheader from './Poheader';
import Complaint from './Complaint';
import Review from './Review';
import Headerwizard from './Headerwizard';
import Footerwizard from './Footerwizard';

const Table = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [visitedSteps, setVisitedSteps] = useState(new Set([0])); // Track visited steps

  const handleStepChange = (step) => {
    setVisitedSteps((prev) => new Set(prev).add(step)); // Add the new step to the set
  };

  return (
    <Wizard
      onStepChange={(step) => handleStepChange(step)}
      header={<Headerwizard visitedSteps={visitedSteps} />}
      footer={<Footerwizard selectedRow={selectedRow}/>}
    >
      <Poheader selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
      <Complaint selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
      <Review />
    </Wizard>
  );
};

export default Table;
