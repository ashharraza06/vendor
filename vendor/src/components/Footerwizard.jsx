import React from 'react';
import { useWizard } from 'react-use-wizard';
import '../App.css'
function Footerwizard(selectedRow) {
    const {
        isLoading,
        isLastStep,
        isFirstStep,
        previousStep,
        nextStep,
        goToStep,
    } = useWizard();
    return (
        <>
            <div className="footerbuttons">
                <button className="footbuttons" onClick={previousStep} disabled={isFirstStep}>
                    Back
                </button>
                <button className="footbuttons" onClick={nextStep} disabled={isLastStep || selectedRow == null}>
                    Next
                </button>
            </div>
        </>
    )
}

export default Footerwizard
