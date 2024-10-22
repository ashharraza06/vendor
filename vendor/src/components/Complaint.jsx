import React, { useContext } from 'react';
import ComplaintForm from './ComplaintForm';
import Attachment from './Attachment';
import ComplaintContext from '../context/complaint/ComplaintContext';
import RevTable from './RevTable';
import Loading from './Loading';

function Complaint() {
  const compContext = useContext(ComplaintContext);
  const { complaint, setComplaint, PoComp } = compContext;

  return (
    <>
      {PoComp && PoComp.length > 0 ? (  // Check if PoComp exists and is not empty
        <div className="step2-container">
          <RevTable rowdata={PoComp} heading="Complaints" />
          <ComplaintForm complaint={complaint} setComplaint={setComplaint} ecom={true} />
          <Attachment complaint={complaint} setComplaint={setComplaint} ecom={true} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Complaint;
