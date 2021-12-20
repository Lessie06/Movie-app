import React from 'react'
import '../App.css'

const Movie = (props) =>{
    return(
        <div>
        {props.movies.map((movie,index)=>
        <div className='row'>
        <div className='column'>
            <div className='card'>
                <img src={movie.Poster} alt="movie-poster" style={{width:"100%"}}></img>
                <div className='container'>
                <h5>{movie.Title}</h5>
                <br></br>
                <h6>{movie.Year}</h6>
                </div>
            </div>
            </div>
            </div>
            
        )}
        </div>
        
    )
}

export default Movie;