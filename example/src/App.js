import React from 'react'
import styles from './App.module.css'

import { ExampleComponent } from 'image-slideshow'
import 'image-slideshow/dist/index.css'

const App = () => {

  return (
    <div className={styles.wrapper}>
      <h1>Image Slider Component</h1>
      <p>This is the description of the component</p>
      <ExampleComponent text='Create React Library Example 😄' />
    </div>
  )
  
  
}

export default App
