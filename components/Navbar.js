import request from "../utils/request"
import {useRouter} from "next/router"

function Navbar() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 whitespace-nowrap text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(request).map(([key, {title, url}]) =>(
                    <h2 key={key}
                    onClick={() => router.push(`/?genres=${key}`)}
                    className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr24">{title}</h2>
                ))}    
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}

export default Navbar
