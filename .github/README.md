# conviva-js-chromecast-caf
Conviva Chromecast CAF module auto-detects events emitted by Player Manager.

## Offline Library
The Conviva JavaScript Chromecast CAF module module is built on top of <a href="https://github.com/Conviva/conviva-js-coresdk">conviva-core-sdk</a>, is shared as offline library and should be included via the <script> tag in the application.

Via html:
``` 
<script type="text/javascript" src="<PATH>/conviva-core-sdk.js"></script>
<script type="text/javascript" src="<PATH>/conviva-chromecast-cafmodule.js"></script>
```
## Install via npm 

```
npm install @convivainc/conviva-js-chromecast-caf --save
```
## Install via yarn 

```
yarn add @convivainc/conviva-js-chromecast-caf
```
Refer to following sample code to include Chromecast CAF modules followed by Conviva modules.

Via import/require:
```
const Conviva = require('<path>/conviva-js-coresdk');
const ConvivaChromecastCafModule = require('<path>/conviva-js-chromecast-caf');
```
```
import Conviva from '@convivainc/conviva-js-coresdk'
import ConvivaChromecastCafModule from'@convivainc/conviva-js-chromecast-caf'
```

## Supported Framework Versions
Receiver SDK version 3.0.0085 bundled with Media Player Library 1.0.0

## Supported Devices
Chromecast 1, Chromecast 2 and Chromecast Ultra

## Note:
* Refer https://community.conviva.com/ for integration guidelines.
