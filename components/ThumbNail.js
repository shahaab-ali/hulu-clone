import {ThumbUpIcon} from '@heroicons/react/outline'
import { forwardRef } from 'react'

import Image from 'next/image'

const ThumbNail = forwardRef(({result}, ref) => {
    // console.log(result)
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 z-50">
           <Image
           src={
               `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
               `${BASE_URL}${result.poster_path}`
        }
           layout="responsive"
           width={1920}
           height={1080}
           alt="Thumbnail"/>
           <div className="p-2">
               <p className="truncate max-w-md">{result.overview}</p>
               <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
               <p className="flex items-center opacity-0 group-hover:opacity-100">{result.mdeia_type && `${result.mdeia_type} .`} {" "}
               {result.release_date || result.first_air_date} .{" "}
               <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
               </p>
           </div>

        </div>
    )
})
ThumbNail.displayName = 'ThumbNail';
export default ThumbNail
