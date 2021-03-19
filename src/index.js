import React, { useState } from 'react'
import styles from './styles.module.css'

import Credits from './components/Credits'

export const Slider = ({
  imageList,
  showCredits = true,
  showProgress = true,
  showControls = true,
  showDescription = true
}) => {
  // const [array, setArray] = useState([1, 2, 3])
  let [active, setActive] = useState(0)

  const leftClickHandle = () => {
    console.log('Left clicked')
    if (active !== 0) {
      setActive((active -= 1))
    } else {
      setActive((active = imageList.length - 1))
    }

    // const [first, second, ...rest] = array
    // setArray([...rest, first, second])
  }

  const rightClickHandle = () => {
    console.log('Right clicked')
    if (active !== imageList.length - 1) {
      setActive((active += 1))
    } else {
      setActive((active = 0))
    }

    console.log(active)
    // const [first, ...rest] = array
    // setArray([...rest, first])
  }

  const dotClickHandler = (e) => {
    const dotNum = e.target.getAttribute('data-key')
    setActive((active = parseInt(dotNum)))
  }

  setInterval(() => {
    if (active !== imageList.length - 1) {
      setActive((active += 1))
    } else {
      setActive((active = 0))
    }
  }, 3000)
  return (
    <div>
      {showCredits && (
        <Credits
          author={imageList[active].author}
          authorLink={imageList[active].authorLink}
        />
      )}
      <div className={styles.wrapper}>
        {showProgress && (
          <p className={styles.progress}>
            {`${active + 1} / ${imageList.length}`}
          </p>
        )}
        {showControls && (
          <div className={styles.leftClick} onClick={leftClickHandle}>
            ←
          </div>
        )}

        <img src={imageList[active].url} alt='image' />
        {showControls && (
          <div className={styles.rightClick} onClick={rightClickHandle}>
            →
          </div>
        )}
      </div>
      {showDescription && (
        <div className={styles.description}>
          <p>{imageList[active].title}</p>
        </div>
      )}
      <div className={styles.dots}>
        {imageList.map((el, index) => {
          if (index !== active) {
            return (
              <div
                className={styles.dot}
                data-key={index}
                onClick={dotClickHandler}
              ></div>
            )
          } else {
            return <div className={styles.activeDot}></div>
          }
        })}
      </div>
    </div>
  )
}
