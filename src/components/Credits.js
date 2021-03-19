import React from 'react'
import styles from './Credits.module.css'

const Credits = ({ author, authorLink }) => {
  return (
    <div className={styles.wrapper}>
      {author && authorLink ? (
        <p>
          Photo by <a href={authorLink}>{author}</a>
        </p>
      ) : author ? (
        <p>Photo by {author}</p>
      ) : (
        ''
      )}
    </div>
  )
}

export default Credits
