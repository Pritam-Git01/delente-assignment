import React from 'react';
import { useTable, useSortBy, useGlobalFilter, useAsyncDebounce } from 'react-table';
import { SearchIcon, ChevronUpIcon, ChevronDownIcon } from 'lucide-react';
export default function Users({ users }) {
  // console.log(users);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
  
      // console.log('getServerSideProps return value:', { props: { users } });
  
      return {
        props: { users },
      };
    } catch (error) {
      // console.log(error)
      console.error('Error fetching users:', error);
      return {
        props: { users: [] },
      };
    }
  }



function UserTable() {




const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '(123) 456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '(234) 567-8901' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '(345) 678-9012' },
  // Add more user data as needed
]

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div className="flex items-center mb-4">
      <SearchIcon className="h-5 w-5 text-gray-400 mr-2" />
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ${count} records...`}
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

 function UserTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy
  )

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User List</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="w-full">
            <thead>
              {headerGroups.map((headerGroup, index) => (
                
                <tr key={index} {...headerGroup.getHeaderGroupProps()} className="bg-gray-50">
                  {headerGroup.headers.map((column, index) => (
                    <th
                    key={index}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        {column.render('Header')}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <ChevronDownIcon className="h-4 w-4 ml-1" />
                            ) : (
                              <ChevronUpIcon className="h-4 w-4 ml-1" />
                            )
                          ) : (
                            ''
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row)
                return (
                  <tr key={index} {...row.getRowProps()} className="hover:bg-gray-50">
                    {row.cells.map((cell, index) => (
                      <td
                       key={index}
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
}