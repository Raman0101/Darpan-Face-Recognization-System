import React from "react";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('/pencils.jpg')`, // public folder me image rakho
        minHeight: "100vh",
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Smart India Hackathon Project Overview
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-blue-500 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-bold mb-4">Problem Statement</h2>
              <p>
                Clearly describe the challenge or issue that your project aims
                to solve. Provide relevant background and why it's important to
                address this problem.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-blue-500 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-bold mb-4">Solution</h2>
              <p>
                Explain your innovative approach to solving the problem.
                Highlight key features and benefits that make your solution
                effective.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-blue-500 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-bold mb-4">Methodology</h2>
              <p>
                Outline the step-by-step process or technology stack you used to
                implement your solution. Mention tools, frameworks, and
                techniques applied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
