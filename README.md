Performance comparisons between:

- antvis/g6 v5: https://github.com/antvis/G6/tree/v5
  - website: https://g6-next.antv.antgroup.com
- antvis/g6 v4: https://github.com/antvis/G6
  - website: https://g6.antv.antgroup.com/
- sigmajs: https://github.com/jacomyal/sigma.js
  - website: https://www.sigmajs.org/

### Usage

```
yarn install

npm run dev
```

- Open `http://localhost:3000/` (Or the address you started at) in your browser, you will find the comparing charts with graph-dragging fps, graphzooming fps, and first rendering time(TODO).

- Open `http://localhost:3000/g6v5.html` and open the page's console. You could run g6 v5 demos with runing `window.load1()`, `window.load2()`, `window.load3()`, or `window.load4(nodeNum, edgeNum)` in console.

- Open `http://localhost:3000/g6v4.html` and open the page's console. You could run g6 v4 demos with runing `window.load1()`, `window.load2()`, `window.load3()`, or `window.load4(nodeNum, edgeNum)` in console.

- Open `http://localhost:3000/sigma.html` and open the page's console. You could run sigma demos with runing `window.load1()`, `window.load2()`, `window.load3()`, or `window.load4(nodeNum, edgeNum)` in console.
