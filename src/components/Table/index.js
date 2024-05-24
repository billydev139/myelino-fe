import axios from "axios";
import React, { useEffect, useState } from "react";
import ExcelExportComponent from "../ExcelSheet";
import Pagination from "../Pagination";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Table = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const receivedData = location?.state?.password;
  const [data, setData] = useState();
  useEffect(() => {
   if(receivedData===undefined){
    navigate('/login')
    return
   }
    const payload={
      password:receivedData
    }
    axios
      .post("https://api.myelino.com/public/getSubscribeEmail",payload)
      .then((res) => {
        setData(res?.data?.allEmails);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="flex items-center justify-between">
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-m font-semibold text-primary"
                      >
                        Email
                      </th>

                      <ExcelExportComponent data={data} />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentItems?.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        totalItems={data?.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
export default Table;
