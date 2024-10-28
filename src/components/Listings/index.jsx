export default function JobListings (){
  return(
    <section 
        className="bg-gradient-to-bl  from-cyan-800 to-green-300  px-4 py-10 bg-opacity-75">
        <div 
          className="container-xl lg:container mx-auto">
            <h2 
              className="text-3xl font-bold text-white py-3 px-1 mb-8 text-center rounded-lg">
              Browse Jobs
            </h2>

            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
              {/* Listing 1 */}
              <div 
                className="bg-white rounded-xl shadow-lg transition-all hover:scale-105 relative p-6">
                  <div 
                    className="mb-6">
                      

                    <h3 
                      className="text-xl font-bold text-green-500 tracking-wide">
                          Senior React Developer
                    </h3>

                    <div>
                        <h6 className="text-gray-600 my-2">
                          Full Time - Onsite
                        </h6>
                      </div>

                  </div>
                  <p 
                    className="mb-4 text-gray-700 opacity-80">
                    We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript.
                  </p>
                  <h3 
                    className="text-indigo-800 mb-8 -mt-3 opacity-45 text-sm">
                      $70 - $80K / Year
                  </h3>

                
                    
                  <a
                    href="/"
                    className="h-[36px] bg-gradient-to-r from-green-400 to-green-500 opacity-80 hover:opacity-100 text-white px-4 py-2 rounded-lg text-center text-sm shadow transition-all duration-300
                    active:opacity-40 absolute bottom-4 right-6  "
                  >
                    Read More
                  </a>
                
              </div>
      
            {/* Job Listing 2 */}
            <div className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative p-6">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold text-indigo-500">Front-End Engineer (React)</h3>
              </div>
              <p className="mb-4 text-gray-700">
                Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
              </p>
              <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>
              <div className="border border-gray-200 mb-5"></div>
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Miami, FL
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-gradient-to-r from-green-400 to-green-500 hover:bg-gradient-to-l text-white px-4 py-2 rounded-lg text-center text-sm shadow transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
      
            {/* Job Listing 3 */}
            <div className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative p-6">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold text-indigo-500">React.js Developer</h3>
              </div>
              <p className="mb-4 text-gray-700">
                Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
              </p>
              <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>
              <div className="border border-gray-200 mb-5"></div>
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Brooklyn, NY
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-gradient-to-r from-green-400 to-green-500 hover:bg-gradient-to-l text-white px-4 py-2 rounded-lg text-center text-sm shadow transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

