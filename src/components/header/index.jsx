export default function Navbar (){
    
    return(
    <>

        
        
        <nav className="bg-gradient-to-br from-green-300 to-cyan-600 p-4 flex justify-between items-center transition-all duration-300 right-0 left-0 fixed w-full z-50 ">

            <div 
                className="text-white text-lg font-bold cursor-pointer hover:opacity-100 transition-all duration-300 hover:tracking-wide hover:pl-1"> 
                &lt;DevsBridge/&gt; 

            </div>

            <div className="space-x-6">
                <a href="/" 
                className="text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white">
                    Home
                </a>

                <a href="/jobs" 
                className="text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white">
                    Jobs
                </a>

                <a href="/about" 
                className="text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white">
                    Add Job
                </a>

                <a href="/about" 
                className="text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white">
                    About
                </a>
                <a href="/contact" 
                className="text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white">
                    Contact
                </a>
            </div>
        </nav>
    </>
)
}