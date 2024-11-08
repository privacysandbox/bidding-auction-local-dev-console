/*
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import fs from 'fs';
import https from 'https';

import app from './app/server.js';
import advertiser from './participants/advertiser/server.js';
import publisher from './participants/publisher/server.js';
import sspTop from './participants/sspTop/server.js';
import sspX from './participants/sspX/server.js';
import sspY from './participants/sspY/server.js';
import sspO from './participants/sspO/server.js';
import dspA from './participants/dspA/server.js';
import dspB from './participants/dspB/server.js';
import dspX from './participants/dspX/server.js';
import dspY from './participants/dspY/server.js';

const APP_PORT = 3000;
const ADVERTISER_PORT = 4001;
const PUBLISHER_PORT = 4002;
const DSP_A_PORT = 5001;
const DSP_B_PORT = 5002;
const DSP_X_PORT = 5003;
const DSP_Y_PORT = 5004;
const SSP_TOP_PORT = 6001;
const SSP_X_PORT = 6002;
const SSP_Y_PORT = 6003;
const SSP_O_PORT = 6004;

const serverOptions = {
  key: fs.readFileSync('certs/localhost-key.pem'),
  cert: fs.readFileSync('certs/localhost.pem'),
};

https.createServer(serverOptions, app).listen(APP_PORT);
https.createServer(serverOptions, advertiser).listen(ADVERTISER_PORT);
https.createServer(serverOptions, publisher).listen(PUBLISHER_PORT);
https.createServer(serverOptions, dspA).listen(DSP_A_PORT);
https.createServer(serverOptions, dspB).listen(DSP_B_PORT);
https.createServer(serverOptions, dspX).listen(DSP_X_PORT);
https.createServer(serverOptions, dspY).listen(DSP_Y_PORT);
https.createServer(serverOptions, sspTop).listen(SSP_TOP_PORT);
https.createServer(serverOptions, sspX).listen(SSP_X_PORT);
https.createServer(serverOptions, sspY).listen(SSP_Y_PORT);
https.createServer(serverOptions, sspO).listen(SSP_O_PORT);

console.log('---');
console.log(`App server available at https://localhost:${APP_PORT}`);
console.log('---');
console.log(
  `Advertiser server available at https://localhost:${ADVERTISER_PORT}`
);
console.log(
  `Publisher server available at https://localhost:${PUBLISHER_PORT}`
);
console.log('---');
console.log(`DSP-A server available at https://localhost:${DSP_A_PORT}`);
console.log(`DSP-B server available at https://localhost:${DSP_B_PORT}`);
console.log(`DSP-X server available at https://localhost:${DSP_X_PORT}`);
console.log(`DSP-Y server available at https://localhost:${DSP_Y_PORT}`);
console.log('---');
console.log(`SSP-TOP server available at https://localhost:${SSP_TOP_PORT}`);
console.log(`SSP-X server available at https://localhost:${SSP_X_PORT}`);
console.log(`SSP-Y server available at https://localhost:${SSP_Y_PORT}`);
console.log(`SSP-O server available at https://localhost:${SSP_O_PORT}`);
console.log('---');