import { useState } from "react"

export default function JobCard(jobs){

    const [showDescription, SetShowDescription] = useState(false);

    let description = jobs.description;

    if (!showDescription){
      description = description.substring(0,105) + " ...";
    }

    return(
        <div className="bg-white rounded-xl shadow-lg transition-all hover:scale-105 relative p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-green-500 tracking-wide">
                  {jobs.title}
                </h3>

                <h6 className="text-gray-600 my-2">{jobs.type}</h6>
              </div>

              <div className="relative mb-4 px-4 md:px-0">

                <p className="text-gray-700 opacity-80 mb-0 pr-2">
                  {description}
                </p>

                
              <div
              className="flex justify-end">
                  <button
                  onClick={() => SetShowDescription((prevState) => !prevState)} 
                  type="button"
                  className=" text-gray-700 hover:text-opacity-50 text-[15px] transition-all duration-200 bg-white  backdrop-blur-lg rounded px-2 -mt-5 mb-6 border-none shadow-none hover:shadow-sm">
                    {showDescription ? "Read Less" : "Read More"}
                  </button>



              </div>

              
              

                <h3 className="text-indigo-800 mb-8 opacity-45 text-sm">
                  {jobs.salary}
                </h3>

              </div>

              <a
                href={jobs.link}
                className="h-[36px] bg-gradient-to-r from-green-400 to-green-500 opacity-80 hover:opacity-100 text-white px-4 py-2 rounded-lg text-center text-sm shadow transition-all duration-300 absolute bottom-4 right-6">
                  View Job Description
              </a>
            
            </div>


    )
}