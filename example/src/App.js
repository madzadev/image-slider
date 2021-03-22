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
  {
    url: "https://source.unsplash.com/random/800x400?sig=4",
  },
  {
    url: "https://source.unsplash.com/random/800x400?sig=5",
  },
  {
    url: "https://source.unsplash.com/random/800x400?sig=6",
  },
  {
    url: "https://source.unsplash.com/random/800x400?sig=7",
  },
  {
    url: "https://source.unsplash.com/random/800x400?sig=8",
  },
];

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Image Slider Component</h1>
      <p>This is the description of the component</p>
      <Slider
        imageList={images}
        width={1000}
        height={300}
        autoPlayInterval={5000}
      />
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

      <h1>Autoplay</h1>
      <p className="note">
        The default values of available autoplay props are displayed.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider
        autoPlay={true}
        autoPlayInterval={3000} //in milliseconds
      />`}
      </SyntaxHighlighter>

      <h1>Controls</h1>
      <p className="note">
        The default values of available control props are displayed.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider 
        showArrowControls={true}
        showDotControls={true}
        />`}
      </SyntaxHighlighter>

      <h1>Styling</h1>
      <p className="note">
        The default values of available display props are shown.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider bgColor="grey"/>`}
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
