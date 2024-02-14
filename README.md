# React/NextJS Image slider

![Slider Preview](https://images.ctfassets.net/zlsyc9paq6sa/6wX3r2sDGHSPjMEmIk8nSi/5f9e6581fe9b7bf9cf721ffb14aad6b2/image_slider_preview.gif)

### Demo: [https://image-slider-madza.vercel.app](https://image-slider-madza.vercel.app)

---

## Requirements

Node.js 18.x / 20+ is required.

Tested on React 18.2.0 and NextJS 14.1.0.

## Installation

```javascript
 npm install @madzadev/image-slider
```

## Usage

```javascript
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
```

```javascript
const images = [
  { url: "https://picsum.photos/seed/a/1600/900" },
  { url: "https://picsum.photos/seed/b/1920/1080" },
  { url: "https://picsum.photos/seed/c/1366/768" },
];
```

```javascript
<Slider imageList={images} width={1000} height={300} />
```

`imageList` is the mandatory prop and requires to pass in
an array consisting of objects with `url` keys.

`width` and `height` are mandatory props that
set the dimension of the images shown.

## Behavior

The default values of available options props are displayed.

```javascript
<Slider
  loop={true}
  autoPlay={true}
  autoPlayInterval={3000} // in milliseconds
/>
```

## Controls

The default values of available props are displayed.

```javascript
<Slider showArrowControls={true} showDotControls={true} />
```

## Styling

If set, background color is displayed to fill the background if images are smaller than the slider wrapper.

```javascript
<Slider bgColor="none" />
```

## Final notes

The project is under MIT license, so be free to check it out and give
contributions.
