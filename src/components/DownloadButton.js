import React from 'react'
import './DownloadButton.css'
import downloadicon from '../icons/download.png'
import resume from '../assets/resume.pdf'

function DownloadButton() {
  return (
    <div className='download'>
        <a href={resume} target='_blank' rel="noopener noreferrer" title='resume' className="download-button">
            <span className="button-text">Download CV</span>
            <img src={downloadicon} alt='download-icon' className="download-icon" />
        </a>
    </div>
  )
}

export default DownloadButton
