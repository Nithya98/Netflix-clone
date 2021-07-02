import React from 'react'
import './HomeScreen.css'
import NavBar from '../HomeScreen/NavBar'
import Banner from '../HomeScreen/Banner'
import Rows from '../HomeScreen/Rows'
import Requests from '../HomeScreen/Requests'
import InfoBox from '../HomeScreen/InfoBox'
import { Footer } from '../HomeScreen/Footer'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      {/* NavBar, Banner and Row */}
      <NavBar />
      <Banner />
      <Rows
        title='NETFLIX ORIGINALS'
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title='Trending Now' fetchUrl={Requests.fetchTrending} />
      <Rows title='Top Rated' fetchUrl={Requests.fetchTopRated} />
      <Rows title='Action Movies' fetchUrl={Requests.fetchActionMovies} />
      ​<Rows title='Comedy Movies' fetchUrl={Requests.fetchComedyMovies} />
      <Rows title='Horror Movies' fetchUrl={Requests.fetchHorrorMovies} />
      <Rows title='Romance Movies' fetchUrl={Requests.fetchRomanceMovies} />
      <Rows title='Documentaries' fetchUrl={Requests.fetchDocumentaries} />
      <InfoBox />
      <Footer />
    </div>
  )
}

export default HomeScreen
