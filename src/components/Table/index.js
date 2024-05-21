const people = [
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  {
    email: "lindsay.walton@example.com",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
  
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                   
                   
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-m font-semibold text-primary"
                    >
                      Email
                    </th>
                    
                    
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
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
  );
}