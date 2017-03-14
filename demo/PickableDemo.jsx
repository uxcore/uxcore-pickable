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
      value: [1],
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    const items = [{
      text: '条件一',
      value: 1,
    }, {
      text: '条件二',
      value: 2,
    }, {
      text: '条件三',
      value: 3,
      disable: true,
    }];
    return (
      <div>
        <div>
          <h2>普通</h2>
          <Pickable onChange={this.handleChange.bind(this)} value={this.state.value}>
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
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
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
          <Pickable onChange={this.handleChange.bind(this)} value={this.state.value} type="simple">
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
          <Pickable onChange={this.handleChange.bind(this)} value={this.state.value} type="hook">
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
