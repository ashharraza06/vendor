import React, { useEffect, useState ,useContext} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { IoIosSearch } from "react-icons/io";
import RowContext from '../context/selectedrow/RowContext';
import ComplaintContext from '../context/complaint/ComplaintContext';

function Poheader() {
    const context = useContext(RowContext);
    const {selectedRow , setSelectedRow} = context;

    const compContext = useContext(ComplaintContext);
    const {complaint , setComplaint} = compContext;
    
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const [data, setData] = useState([]); // Initialize as an empty array
    // Uncomment this block to fetch data from the API
    /*
    useEffect(() => {
        const fetchData = async () => {
            try {
                const TokenFetch = await fetch("/v2/oauth/token?grant_type=openapi_2lo", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic MmNjNzI1NGUtY2IzMi00MTU5LWFiNjUtY2U4YTQwODBhY2RkOk5lMk0yYm1EY3BzY3ZsY205TmU5TXRFbms5d3JzckJh"
                    }
                });

                const tokenData = await TokenFetch.json();
                const accesstoken = tokenData.access_token;

                const ReqOrder = await fetch(`https://cors-anywhere.herokuapp.com/https://openapi.ariba.com/api/purchase-orders/v1/prod/orders?$filter=(supplierANID eq AN11180858077-T)&apikey=PVUWHfvxeoXJ700gjyDAho2fc4Fm7ZxJ&type=org`, {
                    method: "GET",
                    headers: {
                        "X-ARIBA-NETWORK-ID": "AN11180267057-T",
                        "Authorization": `Bearer ${accesstoken}`
                    }
                });

                const ordersData = await ReqOrder.json();

                const extractedData = ordersData.content.map(order => ({
                    id: order.documentNumber, // Unique key
                    supplierName: order.supplierName,
                    documentNumber: order.documentNumber,
                    supplierANID: order.supplierANID,
                    poAmount: order.poAmount?.amount || 0, // Handle potential undefined
                }));

                setData(extractedData);

            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch data");
            }
        };
        fetchData();
    }, []);
    */

    // Hardcoded data for demonstration purposes
    useEffect(() => {
        const hardcodedData = Array.from({ length: 50 }, (_, index) => ({
            supplierANID: `AN${(index + 1).toString().padStart(12, '0')}-T`,
            documentNumber: `PO${(index + 1).toString().padStart(6, '0')}`,
            supplierName: `Supplier ${index + 1}`,
            poAmount: {
                amount: (index + 1) * 1000, // Incrementing amount for variety
            },
        }));
        setData(hardcodedData); // Set the hardcoded data
    }, []);
    const onRowSelect = (rowData) => {
        setSelectedRow(rowData); // Update selected row
        const id = rowData.supplierANID;
        const po = rowData.documentNumber;
        setComplaint({
            ...complaint,  // spread the current state to retain other fields
            supplierId: id,  // assign id to supplierId
            documentNumber: po  // assign po to documentNumber
        });
        console.log('Selected Row:', rowData); // Log the selected row details
    };

    const radioButtonTemplate = (rowData) => {
        return (
            <input
                type="radio"
                name="selectedRow"
                checked={selectedRow && selectedRow.documentNumber === rowData.documentNumber}
                onChange={() => {
                    onRowSelect(rowData); // Handle row selection
                    // goToStep(1); // Navigate to the next step when selected
                }}
            />
        );
    };

    return (
        <>
            <div className="poTableContainer">
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setFilters({
                            ...filters,
                            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
                        })}
                    />
                    <IoIosSearch className="search-icon" />
                </div>
                <div className="potable">
                    <DataTable
                        className='TableContent'
                        stripedRows
                        value={data}
                        sortMode='multiple'
                        filters={filters}
                        paginator
                        rows={10}
                        rowsPerPageOptions={[15, 20, 25]}
                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        dataKey="documentNumber" // Use a unique identifier for rows
                    >
                        <Column body={radioButtonTemplate} header="Select" headerStyle={{ textAlign: 'center' }} />
                        <Column field='supplierANID' header="Vendor Id" sortable headerStyle={{ textAlign: 'center' }} />
                        <Column field='documentNumber' header="PO Number" sortable headerStyle={{ textAlign: 'center' }} />
                        <Column field='supplierName' header="Supplier Name" sortable headerStyle={{ textAlign: 'center' }} />
                        <Column field='poAmount.amount' header="PO Amount" sortable headerStyle={{ textAlign: 'center' }} />
                    </DataTable>
                </div>
            </div>

        </>
    );
}

export default Poheader;
