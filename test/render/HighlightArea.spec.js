import expect from 'expect';
import Spotlight from '../../dist/index';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Spotlight', () => {
  it('Should render without blowing up', () => {
    const component = TestUtils.renderIntoDocument( <Spotlight /> );
    expect(component).toExist();
  });

  it('Should add correct classes and styles', () => {
    const component = TestUtils.renderIntoDocument( <Spotlight outerClass="outer" innerClass="inner" /> );
    const outer = TestUtils.findRenderedDOMComponentWithClass(component, 'outer');
    const inner = outer.querySelector('.inner');

    expect(outer).toExist();
    expect(inner).toExist();

    expect(outer.style.left).toNotEqual('');
    expect(outer.style.top).toNotEqual('');
    expect(outer.style.transform).toNotEqual('');
    expect(outer.style.width).toNotEqual('');
    expect(outer.style.height).toNotEqual('');

    expect(inner.style.width).toNotEqual('');
    expect(inner.style.height).toNotEqual('');
  });

  it('Should correctly calculate border size based on screen diagonal and circle radius', () => {
    const originalWindowSize = { w: window.innerWidth, h: window.innerHeight };
    window.innerWidth = 1920;
    window.innerHeight = 1080;

    const component1 = TestUtils.renderIntoDocument( <Spotlight radius={150} outerClass="outer" innerClass="inner" /> );
    const component2 = TestUtils.renderIntoDocument( <Spotlight radius={25} outerClass="outer" innerClass="inner" /> );
    const inner1 = TestUtils.findRenderedDOMComponentWithClass(component1, 'inner');
    const inner2 = TestUtils.findRenderedDOMComponentWithClass(component2, 'inner');

    expect(inner1.style.borderWidth).toBe('2353px');
    expect(inner2.style.borderWidth).toBe('2228px');

    // Mock window size
    window.innerWidth = 800;
    window.innerHeight = 600;

    const component3 = TestUtils.renderIntoDocument( <Spotlight radius={150} outerClass="outer" innerClass="inner" /> );
    const component4 = TestUtils.renderIntoDocument( <Spotlight radius={25} outerClass="outer" innerClass="inner" /> );
    const inner3 = TestUtils.findRenderedDOMComponentWithClass(component3, 'inner');
    const inner4 = TestUtils.findRenderedDOMComponentWithClass(component4, 'inner');

    expect(inner3.style.borderWidth).toBe('1150px');
    expect(inner4.style.borderWidth).toBe('1025px');

    // Restore window size
    window.innerWidth = originalWindowSize.w;
    window.innerHeight = originalWindowSize.h;
  });
});
