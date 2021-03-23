import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      {/* <p>
        Image slider created by{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/madzadev'
        >
          Madza
        </a>
      </p> */}
      <p>Placeholder images from <a href="https://picsum.photos/">Lorem picsum</a>. Icons from <a href="https://www.flaticon.com/">FlatIcon.</a></p>
      <p>
        Have a suggestion?{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/madzadev/image-slider'
        >
          Contribute{' '}
        </a>
        to project!
      </p>
      {/* <p>
        More music on{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.youtube.com/911madza'
        >
          YouTube
        </a>{' '}
        and{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://soundcloud.com/999madza'
        >
          SoundCloud
        </a>
        .
      </p> */}
    </div>
  )
}

export default Footer
