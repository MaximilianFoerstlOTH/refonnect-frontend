function JobCard({title , location, description } : {title: string, location: any, description: string}) {
    return (
        <a href="./test" >
            <div className="p-4 bg-white shadow-md rounded-lg mb-4 hover:bg-gray-100 hover:shadow-gray-400">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600">{location}</p>
                <p className="text-gray-700 mt-2">{description}</p>
            </div>
        </a>

    );
}

export default JobCard;