import React, { useContext } from 'react';
import ComplaintForm from './ComplaintForm';
import Attachment from './Attachment';
import RowContext from '../context/selectedrow/RowContext';
function Complaint() {
  const context = useContext(RowContext);
  const {selectedRow , setSelectedRow} = context;
 


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
