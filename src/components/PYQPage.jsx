import { useParams, useNavigate } from 'react-router-dom';

export default function PYQPage() {
  const { subjectName } = useParams();
  const navigate = useNavigate(); 

  const companies = [
    'Google',
    'Microsoft',
    'Apple',
    'Uber',
    'Tekion',
    'Amazon',
    'BNY',
    'Tower Research',
    'Meta',
    'Adobe',
    'Oracle',
    'Code Nation'
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        

        <div className="col-span-1 space-y-6">
          <input
            type="text"
            placeholder="Search Company..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Filter by difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Sort by Relevance
          </button>
        </div>


        <div className="col-span-1 md:col-span-3">
          <h2 className="text-2xl font-bold mb-6">PYQs - {subjectName}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
                <p className="text-sm text-gray-500">
                  Previous questions on {subjectName} asked in {company}
                </p>
                <button
                  className="mt-2 text-sm text-blue-600 hover:underline"
                  onClick={() =>
                    navigate(`/pyqs/${encodeURIComponent(subjectName)}/${encodeURIComponent(company)}`)
                  }
                >
                  View Questions
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
