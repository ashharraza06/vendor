import React, { useState, useRef } from 'react';
import { useWizard } from 'react-use-wizard';
import { MdDelete } from "react-icons/md";
import ComplaintForm from './ComplaintForm';
import Attachment from './Attachment';

function Complaint({ selectedRow, setSelectedRow }) {
  const { previousStep, nextStep } = useWizard();


  return (
    <>
      <div className="step2-container">
        <p>Step 2</p>
        <ComplaintForm selectedRow={selectedRow} setSelectedRow={setSelectedRow}/>
        <Attachment />
      </div>
    </>
  );
}

export default Complaint;
