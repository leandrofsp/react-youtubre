import React from 'react'

const Detail = (props) => {
  return (
    <div className='video' style={{ borderColor: '#333'}}>      
      <iframe className='video-play' src={`https://www.youtube.com/embed/${props.show.id.videoId}`}></iframe>
      <div className='title'>
        <h1 className='title-video'>{props.show.snippet.title}</h1>
      </div>
      <div className='description'>
        {props.show.snippet.description}
      </div>
    </div>
  )
}

export default Detail