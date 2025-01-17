import ThumbNail from "./ThumbNail"
import FlipMove from "react-flip-move"

function Result({results}) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
           {results.map(result =>(
               <ThumbNail key={result.id} result={result}/>
           ))}
        </FlipMove>
    )
}

export default Result
