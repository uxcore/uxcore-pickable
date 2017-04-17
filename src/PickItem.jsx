const React = require('react');
const classnames = require('classnames');

class PickItem extends React.Component {

  handleClick(value) {
    if (!this.props.disabled) {
      this.props.onClick(value);
    }
  }

  renderTips() {
    const me = this;
    const { type, prefixCls, number } = me.props;
    if (type === 'simple' && number !== undefined) {
      return <span className={`${prefixCls}-num`}>{number}</span>;
    } else if (type === 'hook' || type === 'simpleHook') {
      return <i className={`${prefixCls}-icon-hook`} />;
    }
    return null;
  }

  render() {
    const me = this;
    const { prefixCls, children, active, value, disabled, type, multiple } = me.props;
    return (
      <div
        className={classnames({
          [`${prefixCls}`]: true,
          active,
          disabled,
          'multiple-active': active && multiple,
          [`${prefixCls}-simple`]: type === 'simple',
          [`${prefixCls}-hook`]: type === 'hook',
          [`${prefixCls}-hook-simple`]: type === 'simpleHook',
        })} onClick={me.handleClick.bind(me, value)}
      >
        {children}
        {me.renderTips()}
      </div>
    );
  }
}

PickItem.defaultProps = {
  disabled: false,
};

PickItem.propTypes = {
  prefixCls: React.PropTypes.string,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  multiple: React.PropTypes.bool,
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
  onClick: React.PropTypes.func,
  // only useful in simple type now.
  number: React.PropTypes.number,
  type: React.PropTypes.oneOf(['normal', 'simple', 'hook', 'simpleHook']),
};

PickItem.displayName = 'PickItem';

module.exports = PickItem;
