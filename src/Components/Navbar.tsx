function Navbar() {
    return (
        <nav className="w-full bg-blue-400 text-white p-4 relative flex items-center">
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">ReConnect</h1>


                {/* Login and Signup */}
            <div className="space-x-4 ml-auto flex">
                <a href="./login">
                    <button className="bg-white text-blue-400 px-4 py-2 rounded">Log In</button>
                </a>
                <a href="./signup">
                    <button className="bg-white text-blue-400 px-4 py-2 rounded">Sign Up</button>
                </a>
            </div>
        </nav>
);
}

export default Navbar;