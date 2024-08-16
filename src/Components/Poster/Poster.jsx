import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import React  from 'react'
import './Poster.css'
import { imageUrl, api_key } from '../../constants/constants'
import axios from '../../axios'

function Poster(props){
  const [movie, setMovie] = useState([])
  const [urlid,setUrlid] = useState('')
  const [movieName, setMovieName] = useState([])
  useEffect(()=>{
    axios.get(props.url).then(Response=>{
      // console.log(Response.data.results)
      setMovie(Response.data.results)
      setMovieName(Response.data.results);
      console.log(Response.data.results)
    }).catch(err=>{
      alert('network error')
    })
  },[])
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handilMovie = (id) =>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(Response=>{
      if(Response.data.results.length !== 0){
        setUrlid(Response.data.results[0])
        //console.log(Response.data.results)
      }else{
        console.log('not avalable')
      }
    })
  }

  return (
    <div className='row'>
      <h3 className="tittle">{props.tittle}</h3>
      <div className="poster">
        {
          movie.map((obj)=>
            <img onClick={(ubj)=>handilMovie   (obj.id)} className={props.small ? 'smallCard' : 'card'} key={obj.id} src={`${imageUrl+obj.backdrop_path}`} alt=''/>
        )}
        <br />
      </div>
      <div className="name">
        <h1 className="movie-name">{movieName ? movie.original_title || movie.title : ''}</h1>
      </div>
        { urlid && <YouTube videoId={urlid.key} opts={opts} /> }
    </div>
  )
}

export default Poster

