/**
 * Pickable Component Demo for uxcore
 * @author onbing
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const Pickable = require('../src');

const { Item } = Pickable;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: [1],
      value2: [1],
      value3: [1],
      value4: [1],
    };
  }

  handleChange(num, value) {
    this.setState({
      [`value${num}`]: value,
    });
  }

  render() {
    const items = [{
      text: '条件一',
      value: 1,
    }, {
      text: '条件二',
      value: 2,
      disable: true,
    }, {
      text: '条件三',
      value: 3,
    }, {
      text: '条件四',
      value: 4,
    }, {
      text: '条件五',
      value: 5,
    }, {
      text: '条件六',
      value: 6,
    }, {
      text: '条件七',
      value: 7,
    }];
    return (
      <div>
        <div>
          <h2>普通</h2>
          <Pickable
            onChange={this.handleChange.bind(this, 1)}
            value={this.state.value1}
            locale={'en-us'}
            maxLines={2}
          >
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >{item.text}</Item>
            ))}
          </Pickable>
        </div>
        <div>
          <h2>普通 / 单选</h2>
          <Pickable
            onChange={this.handleChange.bind(this, 2)}
            value={this.state.value2}
            multiple={false}
          >
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >{item.text}</Item>
            ))}
          </Pickable>
        </div>
        <div>
          <h2>简单</h2>
          <Pickable onChange={this.handleChange.bind(this, 3)} value={this.state.value3} type="simple">
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >{item.text}</Item>
            ))}
          </Pickable>
        </div>
        <div>
          <h2>钩子</h2>
          <Pickable onChange={this.handleChange.bind(this, 4)} value={this.state.value4} type="hook">
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >{item.text}</Item>
            ))}
          </Pickable>
          <h2>简单钩子</h2>
          <Pickable onChange={this.handleChange.bind(this, 4)} value={this.state.value4} type="simpleHook">
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >{item.text}</Item>
            ))}
          </Pickable>
        </div>
      </div>);
  }
}

module.exports = Demo;
