import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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
  prefixCls: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  // only useful in simple type now.
  number: PropTypes.number,
  type: PropTypes.oneOf(['normal', 'simple', 'hook', 'simpleHook']),
};

PickItem.displayName = 'PickItem';

export default PickItem;
