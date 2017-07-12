# React Spotlight

This component covers the page with an overlay, only showing around coordinates that you choose. You can change the coordinates and the circle will animate to the new ones. This could be used to dynamically introduce parts of a website to the user, or create more complex interactive experiences.

## Usage

Live demo: https://www.matislepik.com/react-spotlight/

Source code can be found in the `example/src/Demo.js`.

### Installation

You can install the component through NPM:

`yarn add react-spotlight` or `npm install react-spotlight --save`

Then import it in your code:

`import Spotlight from 'react-spotlight';`

### Basic example:
Renders a spotlight at `x: 350px` `y: 25px`

```
// At top of file
import Spotlight from 'react-spotlight';

// In render method
<Spotlight x={350} y={25} />
```

### Example with all props:
Renders a spotlight at `x: 50%` `y: 25%`. You can add text content inside the circle, but you'll have to style it yourself.
```
<Spotlight
  x={50}
  y={25}
  color="#d74793"
  radius={100}
  responsive
  usePercentage
  animSpeed={1000}
  borderColor="#ddd"
  borderWidth={5}>
  <div style={{
    position: 'absolute',
    left: '50%',
    top: '-50px',
    transform: 'translate(-50%, -100%)',
    whiteSpace: 'nowrap'
  }}>
    <h1>Text content</h1>
  </div>
</Spotlight>
```

### Animating
You can change the `x` / `y` / `color` / `borderColor` variables dynamically and the spotlight will animate to the new size / position / colors. Radius can also be animated, but this is laggy because it changes the CSS width/height values.

### PropTypes

|PropType (*type*) = default|Description|
|---|---|
|x (*number*) = 50|Center of the circle. Pixels or percentage, depending on `usePercentage` value|
|y (*number*) = 50|Center of the circle. Pixels or percentage, depending on `usePercentage` value|
|radius (*number*) = 100|Radius of the circle. Avoid changing this dynamically because css transitions on width/height are laggy.|
|color (*string*) = 'black'|Color of the overlay|
|usePercentage (*boolean*) = false|By default, the coordinates are interpreted as pixels. This causes them to be interpreted as percentage of the viewport.|
|animSpeed (*number*) = 500|Transition speed when changing coordinates. You can control this manually with CSS if you want - but be sure to change it for both the outer and inner container.|
|borderColor (*string*) = 'white'|Color of the circle's border|
|borderWidth (*number*) = 0|Width of the circle's border|
|responsive (*boolean*) = true|Certain values depend on cached viewport size for performance, so we listen to a (throttled) resize event to recalculate values. Turning this off might result in buggy behaviour if the screen is resized.|
|outerClass|Class name for the outer container|
|innerClass|Class name for the inner container|
|outerStyles|Styles for the outer container. Useful if you want to customize the visuals of the spotlight. Be careful - these can override styles that are necessary to make the visuals work.|
|innerStyles|Styles for the inner container|
|children|You can render children into the inner container, but you will have to position them yourself.|

## Development

The example directory doubles as a place to test out changes to the component. It is created using [create-react-app](https://github.com/facebookincubator/create-react-app). To use it:

- `npm run build`
- `cd example`
- `yarn start`

## Notes

- This component works with server rendering, however there will be an invalid checksum error.
- This is inspired by [Ahmad Moussawi's Hop library](https://ahmad-moussawi.github.io/hop/) for jQuery.
