import React, { useState } from "react";
import { Dialog } from "@mui/material";

function MovieCard({name, imageUrl}) {
    const [openDialog, setOpenDialog] = useState(false);
    const [movieData, setMovieData] = useState('');

    const openDialogBox = ()=>{
        setOpenDialog(true);
    }

    const handleDialogBoxClose = ()=>{
        setOpenDialog(false);
    }

    const fetchMovie = async ()=>{
        const response = await fetch(`http://www.omdbapi.com/?apikey=b22b4728&t=${name}`);
        const movie = await response.json();
        setMovieData(movie)
    }

    return (
        <div 
            className="w-72 bg-slate-200 flex flex-col justify-center items-center mx-auto my-2 rounded-lg"
        >
            <img 
                src={imageUrl}
                alt="Movie Image" 
                className="w-fit my-2 px-2"
                onClick={()=>{
                    // first fetch data
                    setTimeout(() => {
                        openDialogBox()
                    }, 1000);
                    fetchMovie()
                }}
            >
            </img>
            <p className="my-2 text-lg font-bold">{name}</p>
            <Dialog style={{
                height: 'h-72'
            }} onClose={handleDialogBoxClose} open={openDialog}>
                <div className="flex justify-between items-center px-2 py-2">
                    <img className="rounded-md" src={imageUrl}/>
                    <p className="mx-2">
                        <h2 className="font-bold text-xl">{name}</h2>
                        <br />
                        <strong>Description</strong><br/>{movieData.Plot}
                        <br />
                        <strong>Release date : </strong>{movieData.Released}
                        <br />
                        <strong>Duration : </strong>{movieData.Runtime}
                        <br />
                        <strong>Cast : </strong>{movieData.Actors}
                        <br />
                        <strong>Language : </strong>{movieData.Language}
                        <br />
                        <strong>IMDB Rating : </strong>{movieData.imdbRating}
                    </p>
                </div>
            </Dialog>
        </div>
    );
}

export default MovieCard;