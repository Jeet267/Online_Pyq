import React, { useState, useEffect } from 'react';
import { FileText, Lock, Eye } from 'lucide-react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

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

const TimedPDFViewer = ({ pdfUrl, onPreviewEnd }) => {
  const [timeLeft, setTimeLeft] = useState(10); 
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setShowOverlay(true);
          onPreviewEnd();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);


    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);


    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 'p' || e.key === 's')) || 
        (e.key === 'PrintScreen') 
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPreviewEnd]);

  return (
    <div className="relative">
      <iframe
        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&print=0`}
        className="w-full h-[500px] rounded border border-gray-200"
        style={{
          pointerEvents: showOverlay ? 'none' : 'auto',
        }}
      />
      <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
        Preview: {timeLeft}s
      </div>
      {showOverlay && (
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center backdrop-blur-sm">
          <div className="text-white text-center p-4 bg-gray-800/80 rounded-lg">
            <Lock className="w-6 h-6 mx-auto mb-2" />
            <p className="text-lg font-semibold">Preview Ended</p>
            <p className="text-sm mt-1">Purchase to view full PDF</p>
          </div>
        </div>
      )}
    </div>
  );
};

const RecentAdded = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [previewUsed, setPreviewUsed] = useState({});

  const handleAddToCart = (pdfName) => {
    alert(`Added "${pdfName}" to cart.`);
  };

  const handleBuyNow = (pdfName) => {
    alert(`Proceeding to buy "${pdfName}".`);
  };

  const handlePreview = (pdf) => {
    if (previewUsed[pdf.name]) {
      alert('Preview already used. Please purchase to view again.');
      return;
    }
    setSelectedPdf(pdf);
  };

  const handlePreviewEnd = () => {
    if (selectedPdf) {
      setPreviewUsed(prev => ({
        ...prev,
        [selectedPdf.name]: true
      }));
    }
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
            className="flex flex-col gap-2 bg-white rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <FileText className="text-red-500 w-6 h-6" />
                <span className="text-gray-700 font-medium truncate">
                  {pdf.name}
                </span>
              </div>
              <button
                onClick={() => handlePreview(pdf)}
                className={`flex items-center gap-1 px-2 py-1 rounded ${
                  previewUsed[pdf.name]
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
                disabled={previewUsed[pdf.name]}
              >
                <Eye className="w-4 h-4" />
                <span className="text-xs">Preview</span>
              </button>
            </div>

            {selectedPdf?.name === pdf.name && (
              <TimedPDFViewer 
                pdfUrl={pdf.url} 
                onPreviewEnd={handlePreviewEnd}
              />
            )}

            <p className="text-xs text-gray-500">Last updated: {lastUpdated}</p>
            <p className="text-xs text-green-600 font-semibold">{price}</p>

            <SignedIn>
              <div className="flex flex-wrap gap-2 mt-2">
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
            </SignedIn>

            <SignedOut>
              <div className="mt-2">
                <button
                  className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full"
                  onClick={() => alert("Please sign in to purchase PDFs")}
                >
                  Sign in to Purchase
                </button>
              </div>
            </SignedOut>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAdded;
