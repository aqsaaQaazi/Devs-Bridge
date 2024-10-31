import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFoundError() {
    return (
        <section className="flex flex-col justify-center items-center h-screen text-center bg-gradient-to-br from-red-500 to-cyan-600 p-6">
            <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4 md:text-8xl" />
            <h1 className="text-5xl font-bold text-white mb-4 md:text-6xl">404 Not Found</h1>
            <p className="text-lg text-white mb-5 md:text-xl">This page does not exist</p>
            <Link
                to="/"
                 className="text-white bg-red-600 hover:bg-red-700 rounded-md px-6 py-3 transition-all duration-200 text-sm md:text-lg shadow-md tracking-wider active:opacity-75"
            >
                Return Home
            </Link>
        </section>
    );
}
