export default function ViewAllBtn (){
    return(
        <div className="rounded-xl transition-transform transform relative p-6 col-span-1 sm:col-span-2 lg:col-span-3">
        <section className="m-auto max-w-lg my-10 px-6">
          <a
            href={`/jobs`}
            className="block bg-gradient-to-r from-cyan-300 to-green-400 text-white font-semibold shadow-lg text-center hover:shadow-2xl py-4 px-6 rounded-xl tracking-wider text-lg hover:bg-gray-700 hover:scale-105 transition-all duration-400">
            View All Jobs
          </a>
        </section>
        </div>
    )
}