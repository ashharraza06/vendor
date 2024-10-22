import React, { useState } from 'react'

import RowContext from './RowContext';

const url = "https://af3dba34trial-dev-vendorapp-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my";
const RowState = (props) => {
    const[selectedRow , setSelectedRow] = useState(null);
    const[poData,setPoData] = useState(null);

    const getPoData = async() =>
    {
        const response = await fetch(`${url}/poheader`,{
            method :"GET",
        })

        const json = await response.json();
        setPoData(json.value);
    }
    return (
        <RowContext.Provider value={{selectedRow , setSelectedRow , getPoData,poData}} >
            {props.children}
        </RowContext.Provider>
    )

}

export default RowState;