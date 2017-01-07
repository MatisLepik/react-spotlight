# React Spotlight

This component covers the page with an overlay, only showing around coordinates that you choose. You can change the coordinates and the circle will animate to the onew ones. This could be used to dynamically introduce parts of a website to the user, or create more complex interactive experiences.

## Usage

Live demo: https://www.matislepik.com/react-spotlight/

Source code can be found in the `example/src/Demo.js`.

### Example (pixel coordinates):

```
<Spotlight x={550} y={325} />
```

### Example (percentage):

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
  borderWidth={5} />
```

### PropTypes

|PropType (*type*) = default|Description|
|---|---|
|x (*number*) = 50|Center of the circle. Pixels or percentage, depending on `usePercentage` value|
|y (*number*) = 50|Center of the circle. Pixels or percentage, depending on `usePercentage` value|
|radius (*number*) = 100|Radius of the circle|
|color (*string*) = 'black'|Color of the overlay|
|usePercentage (*boolean*) = false|By default, the coordinates are interpreted as pixels. This causes them to be interpreted as percentage of the viewport.|
|animSpeed (*number*) = 500|Transition speed when changing coordinates. You can control this manually with CSS if you want - but be sure to change it for both the outer and inner container.|
|borderColor (*string*) = 'white'|Color of the circle's border|
|borderWidth (*number*) = 0|Width of the circle's border|
|responsive (*boolean*) = true|Certain values depend on cached viewport size for performance, so we listen to a (throttled) resize event to recalculate values. Turning this off might result in buggy behaviour if the screen is resized.|
|outerClass|Class name for the outer container|
|innerClass|Class name for the inner container|
|children|You can render children into the inner container, but you will have to position them yourself.|

## Development

The example directory doubles as a place to test out changes to the component. It is created using [create-react-app](https://github.com/facebookincubator/create-react-app). To use it:

- `npm run build`
- `cd example`
- `yarn start`

## Notes

- This component works with server rendering, however there will be an invalid checksum error.
- This is inspired by [Ahmad Moussawi's Hop library](https://ahmad-moussawi.github.io/hop/) for jQuery.
