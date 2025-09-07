import pencilsImg from "../assets/pencils.png"; // make sure the file is inside src/assets

export default function Home() {
  return (
    <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${pencilsImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Centered text */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300" class="fonttt">
          Darpan: Smart Attendance System
        </h2>
        <p className="text-gray-200 text-justify font-bold mb-4 mt-7" >
          Many rural schools in India rely on manual attendance systems, which are time-consuming and prone to errors. 
          Teachers spend significant time marking attendance, reducing instructional time. Additionally, inaccurate 
          records can lead to discrepancies in government reporting for schemes like mid-day meals.
        </p>
        <p className="text-gray-200 font-medium">
          <strong>Impact:</strong> This issue affects over 50% of rural schools, impacting millions of students and teachers. 
          Solving this will save time, improve accuracy, and enhance resource allocation.
        </p>
        <button
            type="button"
            className="mt-5 text-white bg-blue-700 hover:bg-white hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-white dark:hover:text-blue-600 dark:focus:ring-blue-800 transition-colors duration-300"
            >
            Get Started
            <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
                />
            </svg>
            </button>



      </div>
    </section>
  );
}
