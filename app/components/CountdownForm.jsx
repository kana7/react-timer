var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.length > 0 && strSeconds.match(/^[0-9]*$/)) {
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    } else {
      alert('please enter a number');
    }
    this.refs.seconds.value = '';
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
