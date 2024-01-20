import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <div className="w-full h-20 text-white bg-slate-950 flex justify-center items-center font-bold text-5xl">
        Movie App
      </div>
      <div className='flex justify-center my-3'>
        <input 
          className='w-[35%] h-14 bg-slate-300 outline-none border-none px-2 rounded-lg'
          type="text"
        />
        <button
          className='h-14 w-20 mx-2 bg-cyan-700 hover:bg-cyan-800 px-1 py-1 rounded-lg font-bold text-white'
        >
          Search
        </button>
      </div>
      <div className='grid grid-cols-4 justify-between'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
      <div className='bg-red-50 w-12 flex justify-between my-12 mx-auto'>
        <img src="src\images\prev-btn.png"></img>
        <img src="src\images\next-btn.png"></img>
      </div>
    </>
  )
}

export default App
