# Sarcasmify
Sarcasmify is a tiny library for converting normal text into InTeRnET SaRcAsM via a React hook.

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
