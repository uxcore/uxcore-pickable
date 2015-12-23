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
import Pickable, {Removeable} from 'uxcore-pickable';
let items = [{
    text: '条件一',
    value: 1,
    checked: true
}, {
    text: '条件二',
    value: 2
}, {
    text: '条件三',
    value: 3
}];
let onChange = (values, items) => {console.info(values)};
React.render(<div>
    <div>
        <Pickable items={items} onChange={onChange}/>
    </div>
    <div>
        <Removeable items={items} onChange={onChange}/>
    </div>
</div>, document.getElementById('target'));
```

## demo

http://uxco.re/components/pickable/

## API

* values(): 获得选中的值

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
| className | string | required | - | 增加额外的class |
|onChange | func | optional | - | 选中情况变化时触发，返回选中的项 |
|hasClear | bool| optional | true |是否有清除按钮 |
|autoHideClear | bool | optional | true | 是否自动隐藏清空按钮|

