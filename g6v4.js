const G6 = window.G6;
const stats = window.Stats;

let globalStats = new stats();

globalStats.showPanel(0);

document.getElementById('stats').appendChild(globalStats.dom);

let last = Date.now();

const stating = () => {
  globalStats.begin();

  // const now = Date.now();
  // if (now - last > 20) {
  //   console.log(now - last);
  // }

  last = Date.now();
  globalStats.end();
  requestAnimationFrame(stating);
};

stating();

let graph;

window.load1 = () =>
  fetch(
    'https://gw.alipayobjects.com/os/basement_prod/da5a1b47-37d6-44d7-8d10-f3e046dabf82.json'
  ).then((res) =>
    res.json().then((d) => {
      const container = document.getElementById('app');
      const before = Date.now();
      if (graph) {
        graph.changeData(d);
      } else {
        graph = new G6.Graph({
          container,
          modes: {
            default: ['zoom-canvas', 'drag-canvas'],
          },
        });
        graph.read(d);
      }
      const after = Date.now();
      console.log(after - before, graph);
    })
  );

window.load2 = () =>
  fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/f0b6af53-7013-40ea-ae12-a24c89a0f960.json'
  ).then((res) =>
    res.json().then((d) => {
      console.log('data size:', d.nodes.length, d.edges.length);
      const container = document.getElementById('app');
      const before = Date.now();
      d.nodes.forEach((node) => delete node.label);
      if (graph) {
        graph.changeData(d);
      } else {
        graph = new G6.Graph({
          container,
          modes: {
            default: [
              {
                type: 'zoom-canvas',
                enableOptimize: false,
              },
              {
                type: 'drag-canvas',
                enableOptimize: false,
              },
            ],
          },
        });
        graph.read(d);
      }
      const after = Date.now();
      console.log(after - before, graph);
      return after - before;
    })
  );

window.load3 = () =>
  fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/f1565312-d537-4231-adf5-81cb1cd3a0e8.json'
  ).then((res) =>
    res.json().then((d) => {
      console.log('data size:', d.nodes.length, d.edges.length);
      const container = document.getElementById('app');
      const before = Date.now();
      d.nodes.forEach((node) => delete node.label);
      if (graph) {
        graph.changeData(d);
      } else {
        graph = new G6.Graph({
          container,
          modes: {
            default: [
              {
                type: 'zoom-canvas',
                enableOptimize: false,
              },
              {
                type: 'drag-canvas',
                enableOptimize: false,
              },
            ],
          },
        });
        graph.read(d);
      }
      const after = Date.now();
      console.log(after - before, graph);
      return after - before;
    })
  );

// window.load4 = (nodeNum, edgeNum) => {
//   const nodes = [],
//     edges = [];
//   for (let i = 0; i < nodeNum; i++) {
//     nodes.push({
//       id: `${i}`,
//       data: {
//         size: 2,
//         x: Math.random() * 900,
//         y: Math.random() * 900,
//       },
//     });
//   }
//   for (let i = 0; i < edgeNum; i++) {
//     edges.push({
//       id: 'e' + i,
//       source: `${Math.floor(Math.random() * nodeNum)}`,
//       target: `${Math.floor(Math.random() * nodeNum)}`,
//     });
//   }
//   const data = {
//     nodes,
//     edges,
//   };
//   console.log('data size:', data.nodes.length, data.edges.length);
//   const container = document.getElementById('app');
//   const before = Date.now();
//   if (graph) {
//     graph.changeData(data);
//   } else {
//     graph = new G6.Graph({
//       container,
//       data,
//       renderer: 'webgl',
//       modes: {
//         default: [
//           {
//             type: 'zoom-canvas',
//             enableOptimize: false,
//           },
//           {
//             type: 'drag-canvas',
//             enableOptimize: false,
//           },
//         ],
//       },
//     });
//   }
//   const after = Date.now();
//   console.log(after - before, graph);
//   return after - before;
// };

// // const multiTimes = () => {
// //   multiTimes;
// // };
