

const UserNav = () => {
    return (
        <div className="p-2 relative inline-block border border-gray-300 rounded-full">
            <button className="flex items-center space-x-2">
                 <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-white">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
            </button>

        </div>
    )
}

export default UserNav;