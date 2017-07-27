import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';


const render = function(Component, defaultProps={}, customProps={}) {
  const props = Object.assign({}, defaultProps, customProps);

  const renderer = TestUtils.createRenderer();
  renderer.render(<Component {...props}/>);

  const output = renderer.getRenderOutput();

  const element = TestUtils.renderIntoDocument(
    React.createElement(Component, props)
  );

  const node = ReactDOM.findDOMNode(element);

  return {
    element: element,
    node: node,
    props: props,
    renderer: renderer,
    output: output
  };
};


export { render };