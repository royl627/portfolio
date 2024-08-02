import React from 'react'
import './Home.css'
import DownloadButton from '../components/DownloadButton'

function Home() {
  return (
    <div className="home-page">
      <div className='home-container'>
        <div className='title'>
          <h1>
            Hi, my name is <span className='highlight'>Roy Li</span>
          </h1>
        </div>
        <div className='message'>
          <h2>
            I'm a <span className='highlight'>Software Developer</span>
          </h2>
        </div>
        <div className='download-btn'>
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}

export default Home;