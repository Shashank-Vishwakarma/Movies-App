import { useCallback, useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Pagination from './components/Pagination';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8); // setRecordsPerPage is not needed because it does not have any use.
  const numberOfPages = Math.ceil(movies.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentMovies = movies.slice(indexOfFirstRecord, indexOfLastRecord);

  const fetchMoviesData = useCallback(async ()=>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=b22b4728&s=${searchInput}`);
    const movie = await response.json();
    setMovies(movie.Search)
  }, [searchInput]);

  // on page load
  useEffect(()=>{
    (async ()=>{
        const response1 = await fetch("http://www.omdbapi.com/?apikey=b22b4728&s=avengers");
        const data1 = await response1.json();
        const response2 = await fetch("http://www.omdbapi.com/?apikey=b22b4728&s=pirates");
        const data2 = await response2.json();
        const response3 = await fetch("http://www.omdbapi.com/?apikey=b22b4728&s=superman");
        const data3 = await response3.json();
        const response4 = await fetch("http://www.omdbapi.com/?apikey=b22b4728&s=game of thrones");
        const data4 = await response4.json();
  
        setMovies([...data1.Search, ...data2.Search, ...data3.Search, ...data4.Search])
      })();
  },[]);

  return (
    <>
      <div className="w-full h-20 text-white bg-slate-950 flex justify-center items-center font-bold text-5xl">
        My Movie
      </div>
      <div className='flex justify-center my-3'>
        <input 
          className='w-[35%] h-14 bg-slate-300 outline-none border-none px-2 rounded-lg'
          type="text"
          placeholder='Search for a movie here...'
          value={searchInput}
          onChange={(e)=>setSearchInput(e.target.value)}
        />
        <button
          className='h-14 w-20 mx-2 bg-cyan-700 hover:bg-cyan-800 px-1 py-1 rounded-lg font-bold text-white'
          onClick={()=>{
            if(searchInput === '') {
              alert("Please enter a movie name to search!")
            } else {
              fetchMoviesData()
            }
          }}
        >
          Search
        </button>
      </div>
      <div className='grid grid-cols-4 justify-between'>
        {
          currentMovies?.map((movieData)=>(
            <MovieCard name={movieData.Title} imageUrl={movieData.Poster}/>
          ))
        }
      </div>
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default App
