// src/components/JobList.js
import JobCard from './JobCard';

const jobs = [
    { title: 'Dog Walker', location: 'City Park', description: 'Walk dogs in the local park.' },
    { title: 'Library Assistant', location: 'Downtown Library', description: 'Help organize books and assist visitors.' },
    { title: 'Grocery Helper', location: 'Community Market', description: 'Assist seniors with grocery shopping.' },
];

function JobList() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Jobs</h2>
            {jobs.map((job, index) => (
                <JobCard
                    key={index}
                    title={job.title}
                    location={job.location}
                    description={job.description}
                />
            ))}
        </div>
    );
}

export default JobList;
