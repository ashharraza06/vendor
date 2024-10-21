import React, {useEffect , useContext} from 'react'
import { useWizard } from 'react-use-wizard';
import RowContext from '../context/selectedrow/RowContext';
function Review() {
  const context = useContext(RowContext);
  const {selectedRow , setSelectedRow} = context;
    const { previousStep } = useWizard();
    
    return (
      <>
        <p>Step 3</p>
        {/* <button onClick={previousStep}>Previous</button> */}
        <p>End of Wizard</p>
      </>
  )
}

export default Review
