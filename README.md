# React-Native TDD

## [Enzyme](https://airbnb.io/enzyme/)

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.

# Installation

```bash
# Install enzyme and enzyme-adapter
$ yarn add --dev enzyme enzyme-adapter-react-16 react-dom
```

Finally, you need to configure enzyme to use the adapter you want it to use. To do this, you can use the top level `configure(...)` API.

```javascript
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```
