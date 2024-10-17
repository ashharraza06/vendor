import React, { useEffect } from 'react'

function ComplaintForm({ selectedRow,setSelectedRow}) {
    const {documentNumber , supplierANID} = selectedRow;
    
    const onChange = (e) => {
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
                            <input type="text" id='vend_id' name='vendorid' value={supplierANID} disabled />
                        </div>
                        <div className="input">
                            <label htmlFor="poNumber">Po Number :-</label>
                            <input type="text" id='poNumber' name='ponumber' value={documentNumber} disabled />
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="comptype">Complain Type :-</label>
                        <select id="comptype" name="comptype" onChange={onChange} defaultValue="" required>
                            <option value="" disabled>
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
                        <textarea id="description" name="description" rows="4" cols="50" onChange={onChange} required>
                            A
                        </textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ComplaintForm
