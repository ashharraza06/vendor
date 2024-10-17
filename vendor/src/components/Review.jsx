import React, {useEffect} from 'react'
import { useWizard } from 'react-use-wizard';
function Review({ selectedRow,setSelectedRow}) {
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
