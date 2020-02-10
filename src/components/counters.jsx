import React, { Component } from 'react';
import Counter from '../components/counter';
class Counters extends Component {
  render() {
    const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
    return (
      <React.Fragment>
        <button
          onClick={onReset}
          className='btn btn-primary btn-sm m-2'
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            handleIncrement={onIncrement}
            handleDecrement={onDecrement}
            counter={counter}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
