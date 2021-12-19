import React from 'react'

const Movie = (props) =>{
    return(
        <div>
        {props.movies.map((movie,index)=>
            <div>
                <img src={movie.Poster} alt="movie-poster"></img>
            </div>
        )}

        </div>
    )
}

export default Movie