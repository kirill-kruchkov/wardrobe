Slide in movement for a specified amount of pixels.

```js
const styled = require('styled-components').default;
const slideIn = require('./slideIn').default;
const MyDemo = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px;
  background-color: ${p => p.theme.primary};
  animation: ${slideIn('-40px', '-20px')} 2s ease-in-out infinite;
`;
<MyDemo />
```
