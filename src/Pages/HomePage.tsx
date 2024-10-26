// src/pages/HomePage.js
import Navbar from '../Components/Navbar';
import JobList from '../Components/JobList';

function HomePage() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="max-w-3xl mx-auto mt-8 w-full">
                <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Find a Small Job, Stay Active!</h1>
                <JobList />
            </div>
        </div>
    );
}

export default HomePage;
