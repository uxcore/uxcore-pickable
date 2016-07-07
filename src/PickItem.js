const React = require('react');
const classnames = require('classnames');

class PickItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(value) {
    if (!this.props.disabled) {
      this.props.onClick(value);
    }
  }

  renderTips() {
    const me = this;
    const {type, prefixCls, number} = me.props;
    if (type === 'simple' && number !== undefined) {
      return <span className={`${prefixCls}-num`}>{number}</span>
    }else if(type === 'hook'){
      return <i className={`${prefixCls}-icon-hook`}></i>
    }
  }

  render() {
    const me = this;
    const {prefixCls, children, active, value, disabled, type} = me.props;
    return (
      <div className={classnames({
         [`${prefixCls}`]: true,
         'active': active,
         'disabled': disabled,
         [`${prefixCls}-simple`]: type === 'simple',
         [`${prefixCls}-hook`]: type === 'hook'
       })} onClick={me.handleClick.bind(me, value)}>
        {children}
        {me.renderTips()}
      </div>
    )
  }
}

PickItem.defaultProps = {
    disabled: false
};

PickItem.propTypes = {
  prefixCls: React.PropTypes.string,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  // only useful in simple type now.
  number: React.PropTypes.number,
  type: React.PropTypes.oneOf(['normal', 'simple', 'hook']),
}

PickItem.displayName = 'PickItem';

module.exports = PickItem;
