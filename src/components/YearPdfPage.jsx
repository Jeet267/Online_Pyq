
import React from 'react';
import { useParams } from 'react-router-dom';

export default function YearPdfPage() {
  const { subjectName, companyName, year } = useParams();


  const pdfUrl = `/pdfs/${subjectName}/${companyName}/${year}.pdf`;

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">
        {companyName} - {subjectName} ({year}) PYQs
      </h1>

      <div className="flex justify-center">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-[80vh] border"
        ></iframe>
      </div>
    </div>
  );
}
