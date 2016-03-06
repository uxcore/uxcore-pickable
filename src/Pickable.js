/**
 * Pickable Component for uxcore
 * @author onbing
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const classnames = require("classnames");
const React = require('react'); 
const ReactDOM = require('react-dom');

class Items {
  constructor(props, onChange) {
    this.onChange = onChange;
    this.initItems(props.items || []);
  }
  initItems(items) {
    this.items = items ? items.map((item) => {
      return new Item(this, item);
    }) : [];
  }
  getItems() {
    return this.items;
  }
  removeItem(item) {
    // trigger
    let i = this.items.indexOf(item);
    if (i < 0) {
      return;
    }
    this.items.splice(i, 1);
    this.onChange(this.getValues(), this.items);
  }
  clear() {
    this.items = [];
    this.onChange([], []);
  }
  checkChange() {
    this.onChange(this.getCheckedValues(), this.items.map((item) => {
      return {
        text: item.getText(),
        value: item.getValue(),
        checked: item.isChecked()
      }
    }));
  }
  clearCheck() {
    this.items.forEach(item => item.unCheck());
    this.checkChange();
  }
  getCheckedValues() {
    return this.items.filter((item) => {
      return item.isChecked()
    }).map(item => item.getValue());
  }
  getValues() {
    return this.items.map(item => item.getValue());
  }
}

class Item {
  constructor(items, options) {
    this.value = options.value;
    this.text = options.text;
    this.checked = options.checked;
    this.items = items;
  }
  getKey() {
    return JSON.stringify(this.value) + "-" + this.text;
  }
  remove() {
    this.items.removeItem(this);
  }
  unCheck() {
    this.checked = false;
  }
  isChecked() {
    return this.checked;
  }
  toggle() {
    if (this.checked) {
      this.checked = false;
    } else {
      this.checked = true;
    }
    this.items.checkChange();
  }
  getText() {
    return this.text;
  }
  getValue() {
    return this.value;
  }
}

class Pickable extends React.Component {

  constructor(props) {
    super(props);

    this.items = new Items(this.props, this.onChange.bind(this));
  }

  onChange(values, items) {
    this.props.onChange && this.props.onChange(values, items);
    this.setState({});
  }

  values() {
    return this.items.getCheckedValues();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items) {
      this.items.initItems(nextProps.items);
    }
  }

  render() {
    let items = this.items.getCheckedValues();
    let hideClear = this.props.autoHideClear && items.length < 1;
    return <ul className={classnames("kuma-pickable", this.props.className)}>
      {this.items.getItems().map((item) => {
        return <li key={item.getKey()} className={classnames("kuma-pickable-item", item.isChecked() && "checked")} onClick={() => {
          item.toggle()
        }}>
          <span className="kuma-pickable-text">{item.getText()}</span>
          {item.isChecked() && <i className="kuma-icon kuma-icon-choose badge"></i>}
        </li>
      })}
      {this.props.hasClear && !hideClear && <li className="kuma-pickable-clear" onClick={() => {this.items.clearCheck()}}>清除所选</li>}
      </ul>;
  }
}

class Removeable extends React.Component {

  constructor(props) {
    super(props);

    this.items = new Items(this.props, this.onChange.bind(this));
  }

  onChange(values, items) {
    this.props.onChange && this.props.onChange(values, items);
    this.setState({});
  }

  values() {
    return this.items.getValues();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items) {
      this.items.initItems(nextProps.items);
    }
  }

  render() {
    let items = this.items.getItems();
    let hideClear = this.props.autoHideClear && items.length < 1;
    return <ul className={classnames("kuma-pickable", "kuma-pickable-removeable", this.props.className)}>
      {items.map((item) => {
        return <li key={item.getKey()} className="kuma-pickable-item">
          <span className="kuma-pickable-text">{item.getText()}</span>
          <i className="kuma-icon kuma-icon-close remover" onClick={() => item.remove()} />
        </li>
      })}
      {this.props.hasClear && !hideClear && <li className="kuma-pickable-clear" onClick={() => {this.items.clear()}}>清除所选</li>}
      </ul>;
  }
}

Removeable.defaultProps = {
  items: null,
  hasClear: true,
  autoHideClear: true,
  onChange: null
};

// http://facebook.github.io/react/docs/reusable-components.html
Removeable.propTypes = {
  hasClear: React.PropTypes.bool,
  autoHideClear: React.PropTypes.bool,
  items: React.PropTypes.array,
  onChange: React.PropTypes.func
};

Removeable.displayName = "Removeable";

Pickable.Removeable = Removeable;

Pickable.defaultProps = {
  items: null,
  hasClear: true,
  autoHideClear: true,
  onChange: null
};

// http://facebook.github.io/react/docs/reusable-components.html
Pickable.propTypes = {
  hasClear: React.PropTypes.bool,
  autoHideClear: React.PropTypes.bool,
  items: React.PropTypes.array,
  onChange: React.PropTypes.func
};

Pickable.displayName = "Pickable";

module.exports = Pickable;
