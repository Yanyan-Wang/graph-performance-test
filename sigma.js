const stats = window.Stats;
const sigma = window.Sigma;
const Graph = window.graphology;

let globalStats = new stats();

globalStats.showPanel(0);

document.getElementById('stats').appendChild(globalStats.dom);

let last = Date.now();

const stating = () => {
  globalStats.begin();

  const now = Date.now();
  if (now - last > 20) {
    console.log(now - last);
  }

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
      if (graph) {
        graph.kill();
      }
      const data = {
        nodes: d.nodes.map((e) => ({
          key: e.id,
          attributes: {
            ...e,
            label: e.olabel,
          },
        })),
        edges: d.edges.map((e, i) => ({
          ...e,
          key: i + 'e',
        })),
      };
      console.log('data size:', data.nodes.length, data.edges.length);
      const container = document.getElementById('app');
      const before = Date.now();
      graph = new Graph();
      graph.import(data);
      graph = new sigma(graph, container, {
        defaultNodeColor: '#ec5148',
        defaultNodeHoverColor: '#66ccff',
      });
      const after = Date.now();
      console.log(after - before, graph);
    })
  );

window.load2 = () =>
  fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/f0b6af53-7013-40ea-ae12-a24c89a0f960.json'
  ).then((res) =>
    res.json().then((d) => {
      if (graph) {
        graph.kill();
      }
      const data = {
        nodes: d.nodes
          .filter((e) => e.id)
          .map((e) => ({ key: e.id, attributes: { ...e } })),
        edges: d.edges.map((e, i) => ({
          ...e,
          key: i + 'e',
        })),
      };
      const container = document.getElementById('app');
      const before = Date.now();
      graph = new Graph();
      graph.import(data);
      graph = new sigma(graph, container, {
        defaultNodeColor: '#ec5148',
        defaultNodeHoverColor: '#66ccff',
      });
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
      if (graph) {
        graph.kill();
      }
      const nodeSet = new Set();
      d.nodes.forEach((e) => nodeSet.add(e.id));
      const data = {
        nodes: d.nodes.map((e) => ({
          key: e.id,
          attributes: {
            ...e,
            size: 1,
          },
        })),
        edges: d.edges
          .filter((e) => nodeSet.has(e.source) && nodeSet.has(e.target))
          .map((e, i) => ({
            ...e,
            key: i + 'e',
          })),
      };
      console.log('data size:', data.nodes.length, data.edges.length);
      const container = document.getElementById('app');
      const before = Date.now();
      graph = new Graph({ multi: true });
      graph.import(data);
      graph = new sigma(graph, container, {
        defaultNodeColor: '#ec5148',
        defaultNodeHoverColor: '#66ccff',
      });
      const after = Date.now();
      console.log(after - before, graph);
      return after - before;
    })
  );

window.load4 = (nodeNum, edgeNum) => {
  const nodes = [],
    edges = [];
  for (let i = 0; i < nodeNum; i++) {
    nodes.push({
      key: `${i}`,
      attributes: {
        label: `${i}`,
        size: 2,
        x: Math.random() * 900,
        y: Math.random() * 900,
      },
    });
  }
  for (let i = 0; i < edgeNum; i++) {
    edges.push({
      key: 'e' + i,
      source: `${Math.floor(Math.random() * nodeNum)}`,
      target: `${Math.floor(Math.random() * nodeNum)}`,
    });
  }
  const data = {
    nodes,
    edges,
  };
  if (graph) {
    graph.kill();
  }
  console.log('data size:', data.nodes.length, data.edges.length);
  const container = document.getElementById('app');
  const before = Date.now();
  graph = new Graph({ multi: true });
  graph.import(data);
  graph = new sigma(graph, container, {
    defaultNodeColor: '#ec5148',
    defaultNodeHoverColor: '#66ccff',
  });
  const after = Date.now();
  console.log(after - before, graph);
  return after - before;
};

const multiTimes = () => {
  multiTimes;
};
