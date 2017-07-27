import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import getScrollParent from '../src/getScrollParent';

function setup(propOverrides) {
  const props = Object.assign({}, propOverrides);

  const element = TestUtils.renderIntoDocument(
    <div {...props}>
      <span>
        <p id='test'>Test Element</p>
      </span>
    </div>
  );
  window.document.body.appendChild(element);

  return {
    element: element.children[ 0 ].children[ 0 ]
  };
}

window.getComputedStyle = function (element) {
  return element.style;
};

describe('getScrollParent', () => {
  describe('when a parent element has overflow: auto', () => {
    it('returns that parent', () => {
      const { element } = setup({ style: { overflow: 'auto' } });
      expect(getScrollParent(element).tagName).toEqual('DIV');
    });
  });

  describe('when a parent element has overflow: scroll', () => {
    it('returns that parent', () => {
      const { element } = setup({ style: { overflow: 'scroll' } });
      expect(getScrollParent(element).tagName).toEqual('DIV');
    });
  });

  describe('when no parent element has overflow set', () => {
    it('returns the window', () => {
      const { element } = setup({});
      expect(getScrollParent(element).tagName).toEqual('BODY');
    });
  });
});
