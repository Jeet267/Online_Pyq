export default function FeaturedPYQSection() {
  return (
    <section className="bg-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Most Reliable PYQs at Your Fingertips
          </h1>
          <p className="text-lg text-gray-700">
            Access previous year questions from trusted sources to boost your
            preparation with confidence.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4481/4481042.png"
            alt="PYQ Illustration"
            className="w-80 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
