import React, { useState, useEffect } from 'react'
import './Banner.css'
import Requests from './Requests'
import axios from './axios'

const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchNetflixOriginals)
      console.log(request)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }

    fetchData()
  }, [])

  console.log('mive seen', movie)

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '....' : string //ellipsis function
  }
  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner__button'> Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
