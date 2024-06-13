import React, { useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { data } from "./Records.json";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Patient Name",
    accessor: "name",
  },
  {
    Header: "Assigned Doctor",
    accessor: "doctor",
  },
  {
    Header: "Disease",
    accessor: "disease",
  },
  {
    Header: "Room No",
    accessor: "room",
  },
];

const EditFormPopup = ({ isOpen, rowData, onSave, onClose }) => {
  const [formData, setFormData] = useState(rowData);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Patient Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Assigned Doctor:</label>
            <input
              type="text"
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="disease" className="block text-sm font-medium text-gray-700">Disease:</label>
            <input
              type="text"
              id="disease"
              name="disease"
              value={formData.disease}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="room" className="block text-sm font-medium text-gray-700">Room No:</label>
            <input
              type="text"
              id="room"
              name="room"
              value={formData.room}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Save</button>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Records = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentRowData, setCurrentRowData] = useState({});
  const [recordsData, setRecordsData] = useState(data);

  const handleEditClick = row => {
    setCurrentRowData(row.original);
    setIsPopupVisible(true);
  };

  const handleSave = (newData) => {
    const rowIndex = recordsData.findIndex((row) => row.id === newData.id);
    const updatedData = [
      ...recordsData.slice(0, rowIndex),
      newData,
      ...recordsData.slice(rowIndex + 1),
    ];
  
    // Log the updated data for debugging
    console.log(updatedData);
  
    setRecordsData(updatedData);
    setIsPopupVisible(false);
  };
  
  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="bg-blue-200 h-screen overflow-x-auto">
      <table {...getTableProps()} className="w-full shadow-xl rounded-md border-collapse m-auto">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="hover:trh">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-4 bg-gray-400 text-white text-left first-of-type:rounded-l-lg">
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </th>
              ))}
              <th className="p-4 bg-gray-400 text-white rounded-r-lg">Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="p-4">{cell.render("Cell")}</td>
                ))}
                <td className="p-4">
                  <button onClick={() => handleEditClick(row)} className="border-none p-2 bg-blue-700 text-white rounded-xl cursor-pointer">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isPopupVisible && (
        <EditFormPopup
          isOpen={isPopupVisible}
          rowData={currentRowData}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
      <div className="m-auto w-96 flex items-center content-center gap-4 p-4">
        <button
          disabled={pageIndex === 0}
          onClick={() => gotoPage(0)}
          className="border-none p-2 bg-black text-white rounded-lg cursor-pointer"
        >
          First
        </button>

        <button
          disabled={!canPreviousPage}
          onClick={previousPage}
          className="border-none p-2 bg-black text-white rounded-lg cursor-pointer"
        >
          Prev
        </button>

        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button
          disabled={!canNextPage}
          onClick={nextPage}
          className="border-none p-2 bg-black text-white rounded-lg cursor-pointer"
        >
          Next
        </button>
        <button
          disabled={pageIndex >= pageCount - 1}
          className="border-none p-2 bg-black text-white rounded-lg cursor-pointer"
          onClick={() => gotoPage(pageCount - 1)}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Records;