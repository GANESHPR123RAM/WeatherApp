import React from 'react'
import preloader from '../asset/preloader.mp4'

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
    <video
      className="absolute top-0 left-0 min-w-full min-h-full object-cover"
      autoPlay
      loop
      muted
    >
      <source src={preloader} type="video/mp4" />
    
    </video>
  </div>
  )
}

export default Loader
