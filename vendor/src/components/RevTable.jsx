import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function RevTable({ rowdata, heading }) {
    // Ensure rowdata is an array; if it's a single object, wrap it in an array
    const dataToDisplay = Array.isArray(rowdata) ? rowdata : [rowdata];

    // Generate dynamic columns based on rowdata fields, excluding 'Pannum'
    const dynamicColumns = dataToDisplay.length > 0 ? Object.keys(dataToDisplay[0])
        .filter(key => key.toLowerCase() !== 'pannum') // Exclude 'Pannum'
        .map((key) => (
            <Column key={key} field={key} header={key.charAt(0).toUpperCase() + key.slice(1)}></Column>
        )) : null;

    return (
        <div className="revTable">
            <h2>{heading}</h2>
            <DataTable value={dataToDisplay} tableStyle={{ minWidth: '50rem' }}>
                {dynamicColumns}  {/* Insert dynamic columns here */}
            </DataTable>
        </div>
    );
}

export default RevTable;
