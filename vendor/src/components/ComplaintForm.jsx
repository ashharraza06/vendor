import React , {useContext} from 'react'
import RowContext from '../context/selectedrow/RowContext';
import ComplaintContext from '../context/complaint/ComplaintContext';

function ComplaintForm() {
    const context = useContext(RowContext);
    const {selectedRow } = context;

    const compContext = useContext(ComplaintContext);
    const {complaint , setComplaint} = compContext;
    const {documentNumber ,  supplierId} = complaint;
    
    const onChange = (e) => {
        setComplaint({
            ...complaint,  // spread the current state to retain other fields
            [e.target.name]: e.target.value  // dynamically set the field based on input name
        });
        console.log(`${e.target.name} : ${e.target.value}`)
    }
    return (
        <>
            <div className="form-container">
                <h2>Raise Complaint</h2>
                <form className="complain-form">
                    <div className="disabled-input">
                        <div className="input">
                            <label htmlFor="vend_id">Vendor Id :-</label>
                            <input type="text" id='vend_id' name='vendorid' value={ supplierId || ''} disabled />
                        </div>
                        <div className="input">
                            <label htmlFor="poNumber">Po Number :-</label>
                            <input type="text" id='poNumber' name='ponumber' value={documentNumber || ''} disabled />
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="comptype">Complain Type :-</label>
                        <select id="comptype" name="CompType" onChange={onChange} defaultValue="" required>
                            <option value={complaint.CompType || ''} disabled>
                                -- Select Complaint Type --
                            </option>
                            <option value="Delay in Payment">Delay in Payment</option>
                            <option value="Wrong Payment">Wrong Payment</option>
                            <option value="GST Issue">GST Issue</option>
                            <option value="TDS Issue">TDS Issue</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="input">
                        <label htmlFor="description">Complaint Description :-</label>
                        <textarea id="description" name="Description" rows="4" cols="50"
                        value={complaint.Description} onChange={onChange} required>
                            A
                        </textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ComplaintForm
