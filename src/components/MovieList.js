import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import SearchBar from './SearchBar'

function MovieList(){
    const [movies, setMovies]=useState([])
    const [searchValue, setSearchValue]=useState('')
    const getMovie = async() =>{
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9c2b5f5f`

        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);

        if(responseJson.Search){
            setMovies(responseJson.Search)
        }
        
    }
    useEffect(() =>{
        getMovie(searchValue)
    }, [searchValue]);

    

    return(
        <div>
        <div>

        {/* <h1>Movies</h1>  */}
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Movie movies={movies}/>
        </div>
        </div>
    )
}

export default MovieList;