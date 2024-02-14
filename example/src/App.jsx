import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);

const images = [
  {
    url: "https://picsum.photos/seed/1/1000/300",
  },
  {
    url: "https://picsum.photos/seed/36/1000/300",
  },
  {
    url: "https://picsum.photos/seed/47/1000/300",
  },
  {
    url: "https://picsum.photos/seed/35/1000/300",
  },
  {
    url: "https://picsum.photos/seed/19/1000/300",
  },
  {
    url: "https://picsum.photos/seed/22/1000/300",
  },
  {
    url: "https://picsum.photos/seed/33/1000/300",
  },
  {
    url: "https://picsum.photos/seed/8/1000/300",
  },
];

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Slider imageList={images} width={1000} height={300} />
      <h1>Installation</h1>
      <SyntaxHighlighter language="bash" style={coldarkDark}>
        {`npm install @madzadev/image-slider`}
      </SyntaxHighlighter>

      <h1>Usage</h1>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`import Slider from '@madzadev/image-slider'
        import "image-slider/dist/index.css"`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`const images = [
          {url: 'https://picsum.photos/seed/a/1600/900'},
          {url: 'https://picsum.photos/seed/b/1920/1080'},
          {url: 'https://picsum.photos/seed/c/1366/768'}
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

      <h1>Behavior</h1>
      <p className="note">
        The default values of available props are displayed.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider
        loop={true}
        autoPlay={true}
        autoPlayInterval={3000} // in milliseconds
      />`}
      </SyntaxHighlighter>

      <h1>Controls</h1>
      <p className="note">
        The default values of available props are displayed.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider 
        showArrowControls={true}
        showDotControls={true}
        />`}
      </SyntaxHighlighter>

      <h1>Styling</h1>
      <p className="note">
        If set, this prop fills the background if images are smaller than the
        slider wrapper.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Slider bgColor="none"/>`}
      </SyntaxHighlighter>

      <h1>Final notes</h1>
      <p className="warning">
        The project is under MIT license, so be free to check it out and give
        contributions.
      </p>
      <Footer />
    </Wrapper>
  );
};

export default App;
