import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from "react";
import { fetchData } from '../MiddlewareComponents/RequestHandle';

const ListComponent = () => {

    const [rows,setRows] = useState([]);

    const columns = [
        { field: 'id', headerName: 'No.', width: 80, disableClickEventBubbling: true},
        { field: 'consumerName', headerName: 'Consumer name', width: 130, disableClickEventBubbling: true },
        { field: 'fatherName', headerName: 'Father name', width: 130, disableClickEventBubbling: true },
        { field: 'meterId',type:'number', headerName: 'Meter Id', width: 130,disableClickEventBubbling: true },
        // {
        //   field: 'age',
        //   headerName: 'Age',
        //   type: 'number',
        //   width: 90,
        // },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   // valueGetter: (params: ValueGetterParams) =>
        //   //   `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        // },
      ];

      useEffect(()=>{
        const payload = {
          id:localStorage.userId
        }
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
        fetchData('/getList',requestOptions).then((data) => {
          console.log(data)
          setRows(data)
        })
      },[])

  return (
    <>
      <div style={{ height: window.innerHeight-60, width: "100%" }}>
        <DataGrid  
          rows={rows}
          columns={columns}
          pageSize={8}
        />
      </div>
    </>
  );
};

export default ListComponent;
