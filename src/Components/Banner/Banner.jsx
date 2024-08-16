import React, { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../axios'
import { api_key, imageUrl } from '../../constants/constants'


function Banner() {
  const [movie, setMovie] = useState({})
  
  
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`).then((Response)=>{
      const results = Response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      // console.log(results[randomIndex])
      setMovie(results[randomIndex])
    })
  }, [])

  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path :""})`}}>
        <div className="content">
            <h1 className='title'> {movie ? movie.original_title  || movie.title : "  "} </h1>
            <div className="button">
                <button className='btn'>Play</button>
                <button className='btn'>My list</button>
            </div>
            <h1 className="discription">
            {movie ? movie.overview : "  "}
            </h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner

// import React, { useState, useEffect } from 'react';
// import './Banner.css';
// import axios from '../../axios';
// import { api_key, imageUrl } from '../../constants/constants';

// function Banner() {
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`)
//       .then((response) => {
//         const movies = response.data.results;
//         const randomIndex = Math.floor(Math.random() * movies.length);
//         setMovie(movies[randomIndex]);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className='banner' style={{ backgroundImage: url(${movie ? imageUrl + movie.poster_path : ""}) }}>
//       <div className="content">
//         <h1 className='title'>{movie ? movie.original_name || movie.title : ""}</h1>
//         <div className="button">
//           <button className='btn'>Play</button>
//           <button className='btn'>My list</button>
//         </div>
//         <h1 className="description">
//           {movie ? movie.overview : ""}
//         </h1>
//       </div>
//       <div className="fade"></div>
//     </div>
//   );
// }

// export default Banner;
