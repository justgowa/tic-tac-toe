import React from 'react';
// import './Cell.css';

export default class Cell extends React.Component {
  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.props.value) return true;
    return false;
  }
  render() {
    console.log('render Cell ' + this.props.i)

    const cellStyles = {
      width: `80px`,
      height: `80px`,
    }
    return (
      <div className="cell" style={cellStyles} onClick={this.props.clickHandler}>
        {this.props.value}
      </div>
    )
  }
}