import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const me = {
  name: 'Sarah Newman',
  age: '21',
  school: 'Michigan State University',
  major: 'Information Science',
  dream_job: 'Powerball Winner'
}


const badmovies = [
  { id: 1, title: 'Elf', genre: 'bad', wasinTheatres: true},
  { id: 2, title: 'Wicked', genre: 'badish', wasinTheatres: true},
  { id: 3, title: 'Mean Girls(new)', genre: 'bad', wasinTheatres: true}
]

function Author() {
  return (
    <div>
      <h2>{me.name} age {me.age}</h2>
      <p>{me.school} major in {me.major}</p>
      <p>Future Career {me.dream_job}</p>
    </div>
  );
}

function MovieReview() {
  const listMovies = badmovies.map(movie => 
    <li 
      key={movie.id}
      style={{
        color: movie.wasinTheatres ? 'white' : 'yellow'
      }}
    >
      {movie.title} is a {movie.genre} movie
    </li>
  );
    return (
      <ul>{listMovies}</ul>
    )


}

function Uselessbutton () {
  function alerts() {
      alert("What did you think would happen");
  }
    return (
        <button onClick={alerts}> Nothing</button>
    )
}




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sarah's Vite + React Exercise</h1>
      <h3>This button does nothing</h3>
      <Uselessbutton />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>List of movies I don't like as a non-movie person</p>
      <MovieReview />
      <h2>Here is more information about me</h2>
      <Author />
    </>
  )
}

export default App
