import React from 'react';
import { FileText } from 'lucide-react';

const recentPdfs = [
  { name: 'DSA 2025', url: '/pdfs/2025.pdf' },
  { name: 'Frontend 2025', url: '/pdfs/Frontend_2025.pdf' },
  { name: 'Backend 2025', url: '/pdfs/Backend_2025.pdf' },
  { name: 'OOPS 2025', url: '/pdfs/OOPS_2025.pdf' },
  { name: 'DBMS 2025', url: '/pdfs/DBMS_2025.pdf' },
  { name: 'English 2025', url: '/pdfs/English_2025.pdf' },
];

const RecentAdded = () => {
  return (
    <div className="bg-gray-100 py-6 px-4">
      <h2 className="text-xl font-bold text-white bg-blue-600 inline-block px-4 py-2 rounded-md mb-6">
        Recently Added PDFs (2025)
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recentPdfs.map((pdf, index) => (
          <a
            key={index}
            href={pdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <FileText className="text-red-500 w-6 h-6" />
            <span className="text-blue-700 hover:underline truncate">{pdf.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentAdded;
