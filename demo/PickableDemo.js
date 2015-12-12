/**
 * Pickable Component Demo for uxcore
 * @author onbing
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const Pickable = require('../src');

const Removeable = Pickable.Removeable;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
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
      return <div>
        <div>
          <Pickable items={items} onChange={onChange}/>
        </div>
        <div>
          <Removeable items={items} onChange={onChange}/>
        </div>
      </div>;
    }
};

module.exports = Demo;
