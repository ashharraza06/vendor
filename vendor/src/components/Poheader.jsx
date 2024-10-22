import React, { useEffect, useState, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { IoIosSearch } from "react-icons/io";
import RowContext from '../context/selectedrow/RowContext';
import ComplaintContext from '../context/complaint/ComplaintContext';
import Loading from './Loading';

function Poheader() {
    const context = useContext(RowContext);
    const { selectedRow, setSelectedRow, poData, getPoData } = context;

    const compContext = useContext(ComplaintContext);
    const { complaint, setComplaint , getCompalins} = compContext;

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
 
    // Initialize as an empty array
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

    useEffect(() => {
        getPoData();
    }, [])


    const onRowSelect = (rowData) => {
        setSelectedRow(rowData); // Update selected row
        const id = rowData.vendor;
        const po = rowData.pono;
        setComplaint({
            ...complaint,  // spread the current state to retain other fields
            vendor: id,  // assign id to supplierId
            pono: po  // assign po to documentNumber
        });
        getCompalins(po);
    };

    const radioButtonTemplate = (rowData) => {
        const isChecked = selectedRow && selectedRow.pono === rowData.pono;

        return (
            <input
                type="radio"
                name="selectedRow"
                checked={isChecked || false}  // Ensure `checked` is either true or false
                onChange={() => onRowSelect(rowData)}
            />
        );
    };

    return (
        <>
            {poData ? (
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
                            value={poData}
                            sortMode='multiple'
                            filters={filters}
                            paginator
                            rows={10}
                            rowsPerPageOptions={[15, 20, 25]}
                            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                            currentPageReportTemplate="{first} to {last} of {totalRecords}"
                            dataKey="pono" // Use a unique identifier for rows
                        >
                            {/* <Column body={radioButtonTemplate} header="Select" headerStyle={{ textAlign: 'center' }} />
                        <Column field='supplierANID' header="Vendor Id" sortable headerStyle={{ textAlign: 'center' }} />
                        <Column field='documentNumber' header="PO Number" sortable headerStyle={{ textAlign: 'center' }} />
                        <Column field='supplierName' header="Supplier Name" sortable headerStyle={{ textAlign: 'center' }} />
                        <Column field='poAmount.amount' header="PO Amount" sortable headerStyle={{ textAlign: 'center' }} /> */}
                            <Column body={radioButtonTemplate} header="Select" headerStyle={{ textAlign: 'center' }} />
                            <Column field='vendor' header="Vendor Id" sortable headerStyle={{ textAlign: 'center' }} />
                            <Column field='pono' header="PO Number" sortable headerStyle={{ textAlign: 'center' }} />
                            <Column field='type' header="Po/Invoice" sortable headerStyle={{ textAlign: 'center' }} />
                            <Column field='amount' header="PO Amount" sortable headerStyle={{ textAlign: 'center' }} />
                        </DataTable>
                    </div>
                </div>
            ) :
                <Loading />}

        </>
    );
}

export default Poheader;
