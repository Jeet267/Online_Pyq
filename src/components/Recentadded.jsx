import React from 'react';
import { FileText } from 'lucide-react';

const recentPdfs = [
  { name: 'DSA 2025', url: '/pdf/DSA_2025.pdf' },
  { name: 'Frontend 2025', url: '/pdf/Frontend_2025.pdf' },
  { name: 'Backend 2025', url: '/pdf/Backend_2025.pdf' },
  { name: 'OOPS 2025', url: '/pdf/OOPS_2025.pdf' },
  { name: 'DBMS 2025', url: '/pdf/DBMS_2025.pdf' },
  { name: 'English 2025', url: '/pdf/English_2025.pdf' },
];

const lastUpdated = 'May 27, 2025 10:00 AM';
const price = '₹3';

const RecentAdded = () => {
  const handleAddToCart = (pdfName) => {
    alert(`Added "${pdfName}" to cart.`);
  };

  const handleBuyNow = (pdfName) => {
    alert(`Proceeding to buy "${pdfName}".`);
  };

  return (
    <div className="bg-gray-100 py-6 px-4">
      <h2 className="text-xl font-bold text-white bg-blue-600 inline-block px-4 py-2 rounded-md mb-2 text-center mx-auto">
        Recently Added PDFs (2025)
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recentPdfs.map((pdf, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-white rounded-lg p-4 shadow hover:shadow-md transition select-none pointer-events-auto"
            style={{ userSelect: 'none' }}
          >
            <div className="flex items-center gap-3">
              <FileText className="text-red-500 w-6 h-6" />
              <span className="text-blue-700 hover:underline truncate font-medium">
                {pdf.name}
              </span>
            </div>

            <p className="text-xs text-gray-500">Last updated: {lastUpdated}</p>
            <p className="text-xs text-green-600 font-semibold">{price}</p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleAddToCart(pdf.name)}
                className="text-sm px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(pdf.name)}
                className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAdded;

