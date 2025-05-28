import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function SubjectYearPage() {
  const years = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017,
    2016, 2015, 2014, 2013, 2012, 2011
  ];

  const { subjectName, companyName } = useParams();
  const navigate = useNavigate();
  const price = '₹2';

  const handleAddToCart = (year) => {
    alert(`Added PYQ for ${subjectName} (${companyName}, ${year}) to cart.`);
  };

  const handleBuyNow = (year) => {
    alert(`Proceeding to buy PYQ for ${subjectName} (${companyName}, ${year}).`);
  };

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
                className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition text-center flex flex-col gap-3"
              >
                <h3
                  onClick={() => navigate(`/pyqs/${subjectName}/${companyName}/${year}`)}
                  className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer hover:underline"
                >
                  {year}
                </h3>

                <p className="text-sm text-green-600 font-semibold">{price}</p>

                <div className="flex justify-center gap-2 mt-auto">
                  <button
                    onClick={() => handleAddToCart(year)}
                    className="text-sm px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(year)}
                    className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
