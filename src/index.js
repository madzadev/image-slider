import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

import backButton from './../public/back.png'
import nextButton from './../public/next.png'

export const Slider = ({ imageList, autoPlay=true, showCredits=true, showProgress=true, showControls=true, showDescription=true}) => {
  // const [array, setArray] = useState([1, 2, 3])
  let [active, setActive] = useState(0)

const setPreviousImage = ()=>{
  if (active !== 0) {
    setActive((active -= 1))
  } else {
    setActive((active = imageList.length - 1))
  }
}

const setNextImage = ()=>{
  if (active !== imageList.length - 1) {
    setActive((active += 1))
  } else {
    setActive((active = 0))
  }
}

  const leftClickHandle = () => {
    setPreviousImage();

    // const [first, second, ...rest] = array
    // setArray([...rest, first, second])
  }

  const rightClickHandle = () => {
    setNextImage();

    // const [first, ...rest] = array
    // setArray([...rest, first])
  }

  const dotClickHandler = (e) => {
    const dotNum = e.target.getAttribute('data-key')
    setActive((active = parseInt(dotNum)))
  }

  
  useEffect(() => {
    if(autoPlay){
      let autoSlider = setInterval(setNextImage, 3000);
      return () => clearInterval(autoSlider);
    }
  }, [active]);

  return (
    <div>
      {showCredits&&(
        <div style={{ textAlign: 'right', maxWidth: '1000px' }}>
        <p>
          Photo by{' '}
          <a href='https://unsplash.com/@flyd2069?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            FLY:D
          </a>{' '}
          on{' '}
          <a href='/collections/4390214/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Unsplash
          </a>
        </p>
      </div>
      )}
      <div className={styles.wrapper}>
        {showProgress&&(
          <p className={styles.progress}>
          {`${active + 1} / ${imageList.length}`}
        </p>
        )}
        {showControls&&(
          <div className={styles.leftClick} onClick={leftClickHandle}>
            <img className={styles.button} src={backButton} alt="back"/>
        </div>
        )}
        <img src={imageList[active].url} alt='image' />
        {showControls&&(
          <div className={styles.rightClick} onClick={rightClickHandle}>
          <img className={styles.button} src={nextButton} alt="next"/>
        </div>
        )}
        {showDescription&&(
          <div className={styles.description}>{imageList[active].title}</div>
        )}
      </div>

      <div className={styles.dots}>
        {imageList.map((el, index) => {
          if (index !== active) {
            return (
              <div
                key={index}
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
