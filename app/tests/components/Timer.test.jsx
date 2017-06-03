var React = require('react');
var reactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', function() {
    expect(Timer).toExist();
  });
  describe('handleSetTimer', () => {

    it('should set state to started status and count', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should never set count above 10 min', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({
        count: 599
      });
      timer.handleStatusChange('started');
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      }, 3001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('paused');
      }, 1001);
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({
        count: 500
      });
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('stopped');
      }, 1001);
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });
});
