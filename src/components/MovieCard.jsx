import React from "react";

function MovieCard() {
    return (
        <div className="w-72 bg-slate-200 flex flex-col justify-center items-center mx-auto my-2 rounded-lg">
            <img 
                src="src\images\movie_unavailable_image.png" 
                alt="Movie Image" 
                className="w-fit my-2 px-2"
            >
            </img>
            <p className="my-2 text-lg font-bold">Movie Name</p>
        </div>
    );
}

export default MovieCard;