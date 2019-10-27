# React-Native TDD

## [Enzyme](https://airbnb.io/enzyme/)

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.

### Installation

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

## [Detox](https://github.com/wix/Detox)

### Prerequisites

---

1. Install [applesimutils](https://github.com/wix/AppleSimulatorUtils)

```bash
$ brew tap wix/brew
$ brew install applesimutils
```

> TIP: Verify it works by typing in terminal applesimutils to output the tool help screen

2. Install Detox command line tools (detox-cli)

```bash
# yarn
$ yarn global add detox-cli
# npm
$ npm install -g detox-cli
```

### Add Detox to your project

1. Install detox
   If you have a React Native project, go to its root folder (where package.json is found) and type the following command:

```bash
# yarn
$ yarn add --dev detox
# npm
```

2. Add Detox config to package.json
   The basic configuration for Detox should be in your package.json file under the detox property:

```json
"detox": {
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/ReactNativeTDD/Build/Products/Debug-iphonesimulator/ReactNativeTDD.app",
      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 11 Pro"
      }
    }
  }
}
```

3. Create your First test

```bash
# Jest
$ detox init -r jest
# Mocha
detox init -r mocha
```
