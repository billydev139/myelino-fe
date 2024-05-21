// import React from 'react';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';

// function ExcelExportComponent({data}) {
  

//     const exportToExcel = () => {
//         const worksheet = XLSX.utils.json_to_sheet(data);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

//         // Buffer to store the generated Excel file
//         const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//         const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

//         saveAs(blob, "MyElinoData.xlsx");
//     };

//     return (
//         <div className="App">
//             <button className='rounded-lg px-5 py-1 mr-3 text-white bg-primary' onClick={exportToExcel}>Export </button>
//         </div>
//     );
// }

// export default ExcelExportComponent;


import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function ExcelExportComponent({ data }) {
    const exportToExcel = () => {
        // Preprocess the data to include only the email field
        const processedData = data.map(item => ({ email: item.email }));

        const worksheet = XLSX.utils.json_to_sheet(processedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // Buffer to store the generated Excel file
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

        saveAs(blob, "MyElinoData.xlsx");
    };

    return (
        <div className="App">
            <button className='rounded-lg px-5 py-1 mr-3 text-white bg-primary' onClick={exportToExcel}>Export </button>
        </div>
    );
}

export default ExcelExportComponent;
