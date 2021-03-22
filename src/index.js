import React, { useState } from 'react'
import styles from './styles.module.css'

import Credits from './components/Credits'
import left from './public/left.svg'
import right from './public/right.svg'

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
      <div className={styles.wrapper}>
        {/* {showDescription && (
          <div className={styles.description}>
            <p>{imageList[active].title}</p>
          </div>
        )} */}
        {/* {showProgress && (
          <p className={styles.progress}>
            {`${active + 1} / ${imageList.length}`}
          </p>
        )} */}
        {showControls && (
          <div className={styles.leftClick} onClick={leftClickHandle}>
            <img src={left} alt='img' />
          </div>
        )}

        <img src={imageList[active].url} alt='image' />
        {showControls && (
          <div className={styles.rightClick} onClick={rightClickHandle}>
            <img src={right} alt='image' />
          </div>
        )}
      </div>
      {showCredits && (
        <Credits
          author={imageList[active].author}
          authorLink={imageList[active].authorLink}
        />
      )}

      <div className={styles.dots}>
        {imageList.map((el, index) => {
          if (index !== active) {
            return (
              <div
                className={styles.dot}
                data-key={index}
                onClick={dotClickHandler}
              />
            )
          } else {
            return <div className={styles.activeDot}></div>
          }
        })}
      </div>
    </div>
  )
}
