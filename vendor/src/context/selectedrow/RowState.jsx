import React, { useState } from 'react'

import RowContext from './RowContext';

const RowState = (props) => {
    const[selectedRow , setSelectedRow] = useState(null);
    return (
        <RowContext.Provider value={{selectedRow , setSelectedRow}} >
            {props.children}
        </RowContext.Provider>
    )

}

export default RowState;