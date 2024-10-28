export default function HeroSection() {
    return (
      <section 
        className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/hero.jpg')",  }} >
        
        <div 
            // className="absolute inset-0 bg-black opacity-30"
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-30"
            >

        </div>
        
    
  
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full  text-center relative z-10 py-20 px-6 ">
        
        
                <h1 className="text-5xl  md:text-6xl font-bold text-green-400 mb-4 rounded-lg p-4 bg-gray-600 bg-opacity-20">
                    Elevate Your Career as a Web Developer
                </h1>
                <p className="text-lg text-white mb-6">
                    Find the React role that complements your abilities and helps you achieve your career objectives.
                </p>
                <a
                    href="/apply"
                    className=" text-white px-6 py-3 rounded-lg shadow-lg active:bg-green-600 hover:bg-green-500 border-2 border-green-500 bg-transparent transition duration-300"
                >
                    Get Started
                </a>
        </div>
      </section>
    );
  }
  