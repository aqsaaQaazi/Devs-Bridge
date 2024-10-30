import {Link} from "react-router-dom"

export default function Navigators (){
    return(
        // {/* <!-- Developers and Employers --> */}
    <section 
        className="py-8 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div 
            className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg shadow-lg">

                    {/* devs card */}
                    <div 
                        className="bg-white p-6 rounded-lg shadow-md transition-transform transform duration-600 hover:scale-105">
                        <h2 
                        className="text-2xl md:3xl font-bold text-green-600">
                            looking for a job?
                        </h2>
                        <p 
                        className="mt-2 mb-4 text-gray-700 text-sm md:text-base">

                            Browse our React jobs and start your career today
                            
                        </p>
                        <Link
                            to="/jobs"
                            className="inline-block 
                            bg-transparent hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 active:bg-green-600 transition   text-green-500 border-2 font-semibold border-green-500 duration-300 text-sm md:text-base" >
                            Browse Jobs
                        </Link>
                    </div>

                    {/* employers card */}
                    <div 
                        className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h2 
                            className="text-2xl font-bold md:text-3xl text-indigo-600">
                            Need Developers?

                        </h2>
                        <p 
                        className="mt-2 mb-4 text-gray-700 text-sm md:text-base">
                        List your job to find the perfect developer for the role
                        </p>
                        <Link
                            to="/add-job.html"
                            className="inline-block 
                            bg-transparent hover:bg-indigo-500 hover:text-white rounded-lg px-4 py-2 active:bg-indigo-600 transition   text-indigo-500 border-2 font-semibold border-indigo-500 duration-300 text-sm md:text-base">
                            Add Job
                        </Link>
                </div>
            </div>
        </div>
  </section>
    )
}