import React, { useState } from 'react'
import ComplaintContext from './ComplaintContext';


const ComplaintState = (props) => {
    const comp1 = {
        vendor: '',
        pono: '',
        CompType: '',
        Description: '',
        Attachment: []
    };

    const [complaint, setComplaint] = useState(comp1);
    const [revComp, setrevComp] = useState(comp1);
    const [PoComp, setPoComp] = useState(null);
    const getCompalins = async (pono) => {
        const url = `https://af3dba34trial-dev-vendorapp-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/complains?$filter=cpono eq '${pono}'`;

        try {
            const response = await fetch(url, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error("Failed to fetch complaints");
            }

            const json = await response.json();
            console.log("Fetched complaints:", json.value);

            // Filter and map only the required fields
            const filteredComplaints = json.value.map(({ complainno, cpannum, cpono }) => ({
                complainno,  // Complain number
                cpannum,     // PAN number
                cpono,       // PO number
                type: "Complaint Type" // Assuming the type is fixed or can be inferred
            }));

            // Set the filtered complaints in your state
            setPoComp(filteredComplaints);

        } catch (error) {
            console.error("Error fetching complaints:", error);
        }
    };
    return (
        <ComplaintContext.Provider value={{ complaint, setComplaint, revComp, setrevComp, getCompalins, PoComp }} >
            {props.children};
        </ComplaintContext.Provider>
    )
}

export default ComplaintState;