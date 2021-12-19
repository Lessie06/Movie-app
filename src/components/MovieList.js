import React, { useEffect } from 'react'

function MovieList(){
    const getMovie = async() =>{
        const url = "http://www.omdbapi.com/?i=tt3896198&apikey=9c2b5f5f"

        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
    }
    useEffect(() =>{
        getMovie()
    }, []);
    return(
        <div></div>
    )
}

export default MovieList;