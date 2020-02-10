import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1"><span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </div>
        <div className="col">
        <button
          className='btn btn-secondary btn-sm'
          onClick={() => this.props.handleIncrement(this.props.counter)} // counterId or reference to counter object
        >
          +
        </button>
        &nbsp;
        <button
          className='btn btn-secondary btn-sm m-2'
          onClick={() => this.props.handleDecrement(this.props.counter)}
          disabled={this.props.counter.value===0 ?' disabled':''}
        >
          -
        </button>
        &nbsp;
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm'
        >
          Delete
        </button>
        </div>
      </div>
    );
  }
  getBadgeClass() {
    let classes = 'badge m-3 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
