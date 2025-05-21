import { useNavigate } from 'react-router-dom';

export default function PYQSection() {
  const navigate = useNavigate(); 

  const subjects = [
    { name: 'DSA', weight: 19 },
    { name: 'Computer Networks', weight: 7 },
    { name: 'DBMS', weight: 8 },
    { name: 'Backend', weight: 7 },
    { name: 'CS', weight: 10 },
    { name: 'English', weight: 5 },
    { name: 'Frontend', weight: 4 },
    { name: 'Math', weight: 5 },
    { name: 'OOPS', weight: 2 },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">


        <div className="col-span-1 space-y-6">
          <input
            type="text"
            placeholder="Search subjects..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Filter by category</option>
            <option value="core">Core</option>
            <option value="elective">Elective</option>
          </select>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Sort by Weight
          </button>
        </div>


        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subj, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{subj.name}</h3>
              <p className="text-sm text-gray-500">Weight: {subj.weight}</p>


              <button
                className="mt-2 text-sm text-blue-600 hover:underline"
                onClick={() => navigate(`/pyqs/${encodeURIComponent(subj.name)}`)}
              >
                View PYQs
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
