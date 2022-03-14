# Sarcasmify
Sarcasmify is a React hook for converting normal text into InTeRnET SaRcAsM.

## Installation
```shell
yarn add sarcasmify
```

## Usage
```javascript
import { useSarcasm } from 'sarcasmify';

export default function MyComponent() {
  const sarcasmify = useSarcasm()

  const mySarcasticVariable = sarcasmify('this is some text')

  return (
    <div>
      <p>Here is some regular text</p>
      <p>{mySarcasticVariable}</p>
    </div>
  );
}
```

## Live demo
A live demo is available on StackBlitz [here](https://stackblitz.com/edit/react-1wtve2?file=src/App.js). 