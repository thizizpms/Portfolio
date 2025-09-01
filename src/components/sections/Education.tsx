import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Education
          </h2>

          <div className="space-y-8">
            {/* Degree 1 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                B.E. in Artificial Intelligence & Machine Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pestim College of Engineering, 2022 – 2026
              </p>
            </div>

            {/* Degree 2 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Pre-University (Science Stream)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                [Your PU College Name], 2020 – 2022
              </p>
            </div>

            {/* Degree 3 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Schooling
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                [Your School Name], Completed 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
