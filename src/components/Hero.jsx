import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Access Previous Year Questions Instantly
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Prepare smarter with solved and unsolved question papers for exams like JEE, NEET, UPSC, SSC, and more.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Browse PYQs
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
