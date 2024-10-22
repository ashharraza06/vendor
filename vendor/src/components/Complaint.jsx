import React, { useContext } from 'react';
import ComplaintForm from './ComplaintForm';
import Attachment from './Attachment';
import ComplaintContext from '../context/complaint/ComplaintContext';
function Complaint() {
 
  const compContext = useContext(ComplaintContext);
  const { complaint, setComplaint ,getPoData , } = compContext;


  return (
    <>
      <div className="step2-container">
        <p>Step 2</p>
        <ComplaintForm  complaint={complaint} setComplaint={setComplaint} ecom={true}/> 
        <Attachment     complaint={complaint} setComplaint={setComplaint} ecom={true}/>
      </div>
    </>
  );
}

export default Complaint;
