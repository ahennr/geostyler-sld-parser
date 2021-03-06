import { Style } from 'geostyler-style';

const pointSimpleTriangle: Style = {
  'name': 'Simple Triangle',
  'rules': [{
    'name': 'Small populated New Yorks',
    'symbolizer': [{
      'kind': 'Mark',
      'wellKnownName': 'Triangle',
      'points': 3,
      'color': '#FF0000',
      'radius': 10,
      'strokeColor': '#000000',
      'strokeWidth': 2,
      'opacity': 1,
      'rotate': 45
    }]
  }]
};

export default pointSimpleTriangle;
