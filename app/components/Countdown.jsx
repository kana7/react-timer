var React = require('react');

var Clock = require('Clock');

var Countdown = (props) => {
  return (
    <div>
        <h1>Countdown</h1>
        <Clock/>
      </div>
  );
};

module.exports = Countdown;
