import React, { useState } from 'react'
import styles from './styles.module.css'

const images = [
  'https://source.unsplash.com/random/800x400?sig=1',
  'https://source.unsplash.com/random/800x400?sig=2',
  'https://source.unsplash.com/random/800x400?sig=3'
]

export const ExampleComponent = ({ text }) => {
  // const [array, setArray] = useState([1, 2, 3])
  let [active, setActive] = useState(0)

  const leftClickHandle = () => {
    console.log('Left clicked')
    if (active !== 0) {
      setActive((active -= 1))
    } else {
      setActive((active = images.length - 1))
    }

    // const [first, second, ...rest] = array
    // setArray([...rest, first, second])
  }

  const rightClickHandle = () => {
    console.log('Right clicked')
    if (active !== images.length - 1) {
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
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.leftClick} onClick={leftClickHandle}>
          ←
        </div>
        <img src={images[active]} alt='image' />
        <div className={styles.rightClick} onClick={rightClickHandle}>
          →
        </div>
      </div>
      <div className={styles.dots}>
        {images.map((el, index) => {
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
  // return <div className={styles.test}>Example Component: {text}</div>
}
