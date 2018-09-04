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
|multiple|bool|optional|true|是否多选|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+，2.0 版本后此项废弃，改为传入 children 时实现。|
|type|string|optional|normal|样式风格，可选值为 `normal`, `simple`, `hook`, `simpleHook`|
|enableFold|bool|optional|false|是否启用折行后自动折叠, 3.0 版本后支持|
|defaultfoldItems|bool|optional|true|是否在折行的情况下默认折叠, 3.0 版本后支持|
|maxLines|number|optonal|1|超过几行的情况下使用折叠, 3.0 版本后支持|
|locale|string|optional|zh-cn|国际化,zh-cn/en-us, 3.0 版本后支持|
|simpleValueInSingleMode|bool|optional|false|单选时，输出和接收的值变成简单的值类型，而非数组，从 [1] 变成 1|

## Item Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string/number|required|-|该 Item 对应的值|
|disabled|boolean|optional|false|是否禁用|
|number|number|optional|-|number 有值时会显示对应的值，2.0 版本后此项废弃，改为传入 children 时实现。|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+，2.0 版本后此项废弃，改为传入 children 时实现。|

