export default function JobListings( ) {

  const jobs = [
    {
        title: "Senior React Developer",
        type: "Full Time - Onsite",
        description: "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript.",
        salary: "$70 - $80K / Year",
        link: "/job-1"
    },
    {
        title: "Front-End Engineer (React)",
        type: "Remote",
        description: "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...",
        salary: "$70K - $80K / Year",
        link: "/job-2"
    },
    {
        title: "React.js Developer",
        type: "Remote",
        description: "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...",
        salary: "$70K - $80K / Year",
        link: "/job-3"
    },
    
    
];

  return(
    <section className="bg-gradient-to-bl from-cyan-800 to-green-300 px-4 py-10 bg-opacity-75">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white py-3 mb-8 text-center rounded-lg">
          Browse Jobs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg transition-all hover:scale-105 relative p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-green-500 tracking-wide">
                  {job.title}
                </h3>

                <h6 className="text-gray-600 my-2">{job.type}</h6>
              </div>

              <p className="mb-4 text-gray-700 opacity-80">
                {job.description}
              </p>

              <h3 className="text-indigo-800 mb-8 -mt-3 opacity-45 text-sm">
                {job.salary}
              </h3>

              <a
                href={job.link}
                className="h-[36px] bg-gradient-to-r from-green-400 to-green-500 opacity-80 hover:opacity-100 text-white px-4 py-2 rounded-lg text-center text-sm shadow transition-all duration-300 absolute bottom-4 right-6">
                  Read More
              </a>
            </div>

          ))}

            
          <div className="rounded-xl transition-transform transform relative p-6 col-span-1 sm:col-span-2 lg:col-span-3">
            <section className="m-auto max-w-lg my-10 px-6">
              <a
                href="jobs.html"
                className="block bg-gradient-to-r from-cyan-300 to-green-400 text-white font-semibold shadow-lg text-center hover:shadow-2xl py-4 px-6 rounded-xl tracking-wider text-lg hover:bg-gray-700 hover:scale-105 transition-all duration-400">
                  View All Jobs
              </a>
            </section>
          </div>
         </div>
      </div>
    </section>
  );
}



