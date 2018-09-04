/**
 * Pickable Component Demo for uxcore
 * @author onbing
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Pickable from '../src';

const { Item } = Pickable;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: [1],
      // value2: 1,
      value3: [1],
      value4: [1],
    };
  }

  handleChange(num, value) {
    console.log(num, value);
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
          <div style={{ width: 400 }}>
            <Pickable value={this.state.value} enableFold>
              <Pickable.Item value="a">
                Item A
              </Pickable.Item>
              <Pickable.Item value="b">
                Item B
              </Pickable.Item>
              <Pickable.Item value="c">
                Item C
              </Pickable.Item>
              <Pickable.Item value="d">
                Item D
              </Pickable.Item>
              <Pickable.Item value="e">
                Item E
              </Pickable.Item>
              <Pickable.Item value="f">
                Item F
              </Pickable.Item>
              <Pickable.Item value="g">
                Item G
              </Pickable.Item>
              <Pickable.Item value="h">
                Item H
              </Pickable.Item>
              <Pickable.Item value="i">
                Item I
              </Pickable.Item>
              <Pickable.Item value="j">
                Item J
              </Pickable.Item>
            </Pickable>
          </div>
          <h2>
            普通
          </h2>
          <Pickable
            onChange={this.handleChange.bind(this, 1)}
            value={this.state.value1}
            locale="en-us"
            maxLines={2}
            enableFold
          >
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
                onClick={() => console.log('123')}
              >
                {item.text}

              </Item>
            ))}
          </Pickable>
        </div>
        <div>
          <h2>
            普通 / 单选
          </h2>
          <Pickable
            onChange={this.handleChange.bind(this, 2)}
            value={this.state.value2}
            multiple={false}
            simpleValueInSingleMode
          >
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >
                {item.text}

              </Item>
            ))}
          </Pickable>
        </div>
        <div>
          <h2>
            简单
          </h2>
          <Pickable
            onChange={this.handleChange.bind(this, 3)}
            value={this.state.value3}
            type="simple"
          >
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >
                {item.text}

              </Item>
            ))}
          </Pickable>
        </div>
        <div>
          <h2>
            钩子
          </h2>
          <Pickable
            onChange={this.handleChange.bind(this, 4)}
            value={this.state.value4}
            type="hook"
          >
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >
                {item.text}

              </Item>
            ))}
          </Pickable>
          <h2>
            简单钩子
          </h2>
          <Pickable
            onChange={this.handleChange.bind(this, 4)}
            value={this.state.value4}
            type="simpleHook"
          >
            {items.map((item, index) => (
              <Item
                key={index}
                value={item.value}
                disabled={item.disable}
              >
                {item.text}

              </Item>
            ))}
          </Pickable>
        </div>
      </div>);
  }
}

export default Demo;
