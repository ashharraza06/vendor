import React, {useContext} from 'react'
import ComplaintForm from './ComplaintForm';
import Attachment from './Attachment';
import ComplaintContext from '../context/complaint/ComplaintContext';



function Review() {
  const compContext = useContext(ComplaintContext);
  const { complaint, setComplaint } = compContext;

  return (
    <>
      <div className="step3-container">
        <ComplaintForm complaint={complaint} setComplaint={setComplaint} ecom={false} />
        <Attachment complaint={complaint} setComplaint={setComplaint} ecom={false} />

      </div>
    </>
  )
}

export default Review
