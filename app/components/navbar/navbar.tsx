import Link from "next/link";
import Image from "next/image";

// components 
import SearchFilters from "./SearchFilter";
import UserNav from "./UserNav";
import AddPropertyBtn from "./AddPropertyBtn";


const Navbar = () => {
    return (
        <div>
            <nav className="w-full fixed top-0 left-0 py-6 border-b border-gray-300 bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/logo.png" alt="DjangoBnb Logo" width={100} height={100} />
                    </Link>

                    <div className="flex space-x-6">
                        <SearchFilters />
                    </div>

                    <div className="flex items-center space-x-6">
                        <AddPropertyBtn />
                       <UserNav />
                    </div>
                </div>
            </div>
            
            </nav>
        </div>
    )
}

export default Navbar;