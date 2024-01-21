import React from "react";

function MovieCard({name, imageUrl}) {
    return (
        <div 
            className="w-72 bg-slate-200 flex flex-col justify-center items-center mx-auto my-2 rounded-lg"
        >
            <img 
                src={imageUrl}
                alt="Movie Image" 
                className="w-fit my-2 px-2"
                // onClick={()=>alert("Clicked")}
            >
            </img>
            <p className="my-2 text-lg font-bold">{name}</p>
        </div>
    );
}

export default MovieCard;