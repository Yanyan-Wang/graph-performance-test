import zoomFPSData from './zoomFPS';
import dragFPSData from './dragFPS';

const G2 = window.G2;

const zoomChart = new G2.Chart({
  container: 'zoom-comparing',
  autoFit: true,
  insetRight: 10,
});

zoomChart
  .line()
  .data(zoomFPSData)
  .encode('x', (d) => d.nodes + d.edges)
  .encode('y', 'fps')
  .encode('color', 'lib')
  .scale('x', { type: 'log' })
  .label({
    text: 'lib',
    selector: 'last',
    fontSize: 10,
  })
  .tooltip({ channel: 'y', valueFormatter: '.1f' });

zoomChart.render();

const dragChart = new G2.Chart({
  container: 'drag-comparing',
  autoFit: true,
  insetRight: 10,
});

dragChart
  .line()
  .data(dragFPSData)
  .encode('x', (d) => d.nodes + d.edges)
  .encode('y', 'fps')
  .encode('color', 'lib')
  .scale('x', { type: 'log' })
  .label({
    text: 'lib',
    selector: 'last',
    fontSize: 10,
  })
  .tooltip({ channel: 'y', valueFormatter: '.1f' });

dragChart.render();
