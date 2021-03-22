import React from "react";
import styles from "./App.module.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Slider } from "image-slider";
import "image-slider/dist/index.css";

const images = [
  {
    url: "https://picsum.photos/1200/300",
  },
  {
    url: "./2.jpg",
  },
  {
    url: "https://source.unsplash.com/random/800x400?sig=3",
  },
];

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Image Slider Component</h1>
      <p>This is the description of the component</p>
      <Slider imageList={images} width={1200} height={300} autoPlay={true} />
      <h1>Installation</h1>
      <SyntaxHighlighter language="bash" style={coldarkDark}>
        {`npm install @madzadev/image-slider`}
      </SyntaxHighlighter>
      <h1>Usage</h1>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`import Slider from '@madzadev/image-slider'`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`const images = [
          {url: 'https://picsum.photos/1200/400'},
          {url: 'https://picsum.photos/1200/400'},
          {url: 'https://picsum.photos/1200/400'}
        ]`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider imageList={images} width={1000} height={300}/>`}
      </SyntaxHighlighter>
      <p className="warning">
        <code>'imageList'</code> is the mandatory prop and requires to pass in
        an array consisting of objects with <code>url</code> keys.
      </p>
      <p className="warning">
        <code>'width'</code> and <code>'height'</code> are mandatory props that
        set the dimension of the images shown.
      </p>
      <h1>Options</h1>
      <p className="note">
        The default values of available options props are displayed.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider
        imageList={images}
        autoPlay={true}
      />`}
      </SyntaxHighlighter>
      {/* <h1>Features</h1>
      Play/Pause Next/Previous tracks Loop audio Shuffle play Drag progress bar
      Volume control Clickable playlist Filter audio files based on genre Search
      audio files by title Responsive design */}
      <h1>Sizing</h1>
      <p className="note">
        By default image slider is set to be 100% width and height of it's
        parent. To set specific values, wrap it:
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {` <div style={{width: '700px', height: '350px'}}>
      <Slider imageList={images}/>
    </div>`}
      </SyntaxHighlighter>
      <p className="warning">
        Larger images will fit and be centered, thanks to{" "}
        <code>object-fit: cover</code>.
      </p>
      <p className="warning">
        Smaller images will not be stretched, instead the background color will
        be displayed.
      </p>
      <h1>Preview</h1>
      <p className="note">
        By default image preview is disabled (dots are used instead). To enable
        it, set <code>preview</code> prop to <code>true</code>.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider imageList={images} preview={true}/>`}
      </SyntaxHighlighter>
      <h1>Final notes</h1>
      <p className="warning">
        The project is under MIT licence, so be free to check it out and give
        contributions.
      </p>
    </div>
  );
};

export default App;
