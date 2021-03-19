import React from 'react'
import styles from './App.module.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Slider } from 'image-slider'
import 'image-slider/dist/index.css'

// const images = [
//   'https://source.unsplash.com/random/800x400?sig=1',
//   'https://source.unsplash.com/random/800x400?sig=2',
//   'https://source.unsplash.com/random/800x400?sig=3'
// ]
const images = ['./1.jpg', './2.jpg']

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Image Slider Component</h1>
      <p>This is the description of the component</p>
      <Slider imageList={images} />
      <h1>Installation</h1>
      <SyntaxHighlighter language='bash' style={coldarkDark}>
        {`npm install @madzadev/image-slider`}
      </SyntaxHighlighter>
      <h1>Usage</h1>
      <SyntaxHighlighter language='javascript' style={coldarkDark}>
        {`import Slider from '@madzadev/image-slider'`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='javascript' style={coldarkDark}>
        {`const images = [
          {
            url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
            title: 'AAAA',
            author: 'John Doe',
            authorLink:'dfdfrf'
          },
          {
            url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
            title: 'Madza - Late Night Drive',
            tags: ['dnb']
          },
          {
            url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
            title: 'Madza - Persistence',
            tags: ['dubstep']
          }
        ]`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='jsx' style={coldarkDark}>
        {`<Slider imageList={images} />`}
      </SyntaxHighlighter>
      <p className='warning'>
        <code>'imageList'</code> is the mandatory prop and requires to pass in
        an array consisting of objects with <code>url</code>, <code>title</code>{' '}
        and <code>tags</code> keys.
      </p>
      <h1>Options</h1>
      <p className='note'>
        The default values of available options props are displayed.
      </p>
      <SyntaxHighlighter language='jsx' style={coldarkDark}>
        {`<Slider
        imageList={images}
        width={800}
        height={400}
        autoPlay={true}
        showCredits={true}
        showTitle={true}
        showProgress={true}
        controls='points'
      />`}
      </SyntaxHighlighter>
      {/* <h1>Features</h1>
      Play/Pause Next/Previous tracks Loop audio Shuffle play Drag progress bar
      Volume control Clickable playlist Filter audio files based on genre Search
      audio files by title Responsive design */}
      <h1>Color schemas</h1>
      <p className='note'>The player uses 5 color palette by default.</p>
      <p className='warning'>
        You can further customize the player by editing the colors variable
        below.
      </p>
      <SyntaxHighlighter language='javascript' style={coldarkDark}>
        {`const colors = \`html {
          --tagsBackground: #9440f3;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #9440f3;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #9440f3;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }\``}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='jsx' style={coldarkDark}>
        {`<Player
        trackList={tracks}
        customColorScheme={colors}
      />`}
      </SyntaxHighlighter>
      <h1>Final notes</h1>
      <p className='warning'>
        It's recommended to use CMS like a Contentful or DatoCMS to manage your
        audio files and access them via API.
      </p>
    </div>
  )
}

export default App
