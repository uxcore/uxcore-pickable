---

## uxcore-pickable [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-pickable.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-pickable) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-pickable.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-pickable#info=devDependencies) 

## TL;DR

uxcore-pickable ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-pickable
$ cd uxcore-pickable
$ npm install
$ gulp server
```

## Usage

```js
const classnames = require('classnames');

const Pickable = require('uxcore-pickable');
const {Item} = Pickable;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: [1]
        }
    }

    handleChange(value) {
      this.setState({
        value: value
      })
    }

    render() {
      let items = [{
        text: '条件一',
        value: 1,
        num: 15
      }, {
        text: '条件二',
        value: 2,
        num: 20
      }, {
        text: '条件三',
        value: 3,
        disable: true
      }];
      return <div>
        <div>
          <Pickable onChange={this.handleChange.bind(this)} value={this.state.value}>
            {items.map((item, index) => {
              return <Item key={index} value={item.value} number={item.num} disabled={item.disable}>{item.text}</Item>
            })}
          </Pickable>
        </div>
        <div>
          <Pickable onChange={this.handleChange.bind(this)} value={this.state.value} type="simple">
            {items.map((item, index) => {
              return <Item key={index} value={item.value} number={item.num} disabled={item.disable}>{item.text}</Item>
            })}
          </Pickable>
        </div>
      </div>;
    }
};

module.exports = Demo;
```

## demo

http://uxco.re/components/pickable/

## API

* values(): 获得选中的值

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|prefixCls|string|optional|kuma-pickable|类名前缀，不使用 kuma 主题时使用|
|className|string|required|-|增加额外的class|
|onChange|func(value, changedKeys)|optional|-|选中情况变化时触发，返回选中的项，以及目前发生变动的值|
|value|array|optional|true|是否有清除按钮|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+|
|type|string|optional|normal|样式风格，可选值为`normal`,`simple`|

## Item Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string/number|required|-|该 Item 对应的值|
|disabled|boolean|optional|false|是否禁用|
|number|number|optional|-|number 有值时会显示对应的值|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+|

