import React, {useContext} from 'react'
import ComplaintForm from './ComplaintForm';
import Attachment from './Attachment';
import ComplaintContext from '../context/complaint/ComplaintContext';
import RowContext from '../context/selectedrow/RowContext';
import RevTable from './RevTable'

function Review() {
  const context = useContext(RowContext);
    const { selectedRow } = context;

  const compContext = useContext(ComplaintContext);
  const { complaint, setComplaint } = compContext;

  return (
    <>
      <div className="step3-container">
        <RevTable rowdata = {selectedRow} heading ="Selected PO Table"/>
        <ComplaintForm complaint={complaint} setComplaint={setComplaint} ecom={false} />
        <Attachment complaint={complaint} setComplaint={setComplaint} ecom={false} />

      </div>
    </>
  )
}

export default Review
