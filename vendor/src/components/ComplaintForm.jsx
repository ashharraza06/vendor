import React from 'react';

function ComplaintForm(props) {
    const { complaint, setComplaint, ecom } = props;
    const { pono, vendor, CompType , Description  } = complaint; // Default values to avoid uncontrolled issue

    const onChange = (e) => {
        setComplaint({
            ...complaint,  // spread the current state to retain other fields
            [e.target.name]: e.target.value  // dynamically set the field based on input name
        });
        console.log(`${e.target.name} : ${e.target.value}`);
    };

    return (
        <div className="form-container">
            <h2>Raise Complaint</h2>
            <form className="complain-form">
                <div className="disabled-input">
                    <div className="input">
                        <label htmlFor="vend_id">Vendor Id :-</label>
                        <input type="text" id='vend_id' name='vendorid' value={vendor || ''} disabled />
                    </div>
                    <div className="input">
                        <label htmlFor="poNumber">Po Number :-</label>
                        <input type="text" id='poNumber' name='ponumber' value={pono || ''} disabled />
                    </div>
                </div>

                <div className="input">
                    <label htmlFor="comptype">Complain Type :-</label>
                    <select 
                        id="comptype" 
                        name="CompType" 
                        value={CompType} // Set value instead of defaultValue
                        onChange={onChange} 
                        required
                        disabled={!ecom}
                    >
                        <option value="" disabled>-- Select Complaint Type --</option> {/* Placeholder */}
                        <option value="Delay in Payment">Delay in Payment</option>
                        <option value="Wrong Payment">Wrong Payment</option>
                        <option value="GST Issue">GST Issue</option>
                        <option value="TDS Issue">TDS Issue</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="input">
                    <label htmlFor="description">Complaint Description :-</label>
                    <textarea 
                        id="description" 
                        name="Description" 
                        rows="4" 
                        cols="50"
                        value={Description} // Properly control the value
                        onChange={onChange}
                        disabled={!ecom} 
                        required
                    />
                </div>
            </form>
        </div>
    );
}

export default ComplaintForm;
