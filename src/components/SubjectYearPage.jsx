import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function SubjectYearPage() {
  const years = [2011,2012,2013,2014,2015,2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const { subjectName, companyName } = useParams();
  const navigate = useNavigate();

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


        <div className="col-span-1 md:col-span-3">
          <h2 className="text-2xl font-bold mb-6">Previous Year Questions by Year</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {years.map((year) => (
              <div
                key={year}
                onClick={() =>
                  navigate(`/pyqs/${subjectName}/${companyName}/${year}`)
                }
                className="cursor-pointer border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition text-center"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{year}</h3>

                <span className="text-blue-600 hover:underline text-sm">
                  View Papers
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
