/**
 * Pickable Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');
const React = require('react');
const ReactDOM = require('react-dom');
const Item = require('./PickItem');


class Pickable extends React.Component {

    constructor(props) {
        super(props);
    }

    handleItemClick(value) {
        const me = this;
        const [...values] = me.props.value;
        const index = values.indexOf(value);
        if (!me.props.multiple) {
            me.props.onChange([value], value);
            return;
        }
        if (index !== -1) {
            values.splice(index, 1);
            me.props.onChange(values, value);
        }
        else {
            values.push(value);
            me.props.onChange(values, value);
        }
    }

    renderChildren() {
        const me = this;
        const {prefixCls, type, children, value, max} = me.props;
        const rendered = React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    active: value.indexOf(child.props.value) !== -1,
                    prefixCls: `${prefixCls}-item`,
                    type: type,
                    jsxmax: max,
                    onClick: me.handleItemClick.bind(me),
                });
        });
        return rendered;
    }

    render() {
        const me = this;
        const {prefixCls, className} = me.props;
        return (
            <div className={classnames({
                [`${prefixCls}`]: true,
                [className]: !!className,
            })}>
                {me.renderChildren()}
            </div>
        );
    }
}

Pickable.defaultProps = {
    prefixCls: 'kuma-pickable',
    value: [],
    type: 'normal',
    multiple: true,
    onChange: () => {
    }
};

// http://facebook.github.io/react/docs/reusable-components.html
Pickable.propTypes = {
    prefixCls: React.PropTypes.string,
    className: React.PropTypes.string,
    value: React.PropTypes.array,
    multiple: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    type: React.PropTypes.oneOf(['normal', 'simple', 'hook']),
    max: React.PropTypes.number,
};

Pickable.displayName = 'Pickable';

Pickable.Item = Item;

module.exports = Pickable;
