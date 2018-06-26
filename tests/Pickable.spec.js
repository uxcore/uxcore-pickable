import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import $ from 'jquery';
import Pickable from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Uxcore Pickable', () => {
    it('should be able to pick item', () => {
        class Demo extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    value: ['foo'],
                }
            }

            render() {
                return (
                    <Pickable value={this.state.value}
                        onChange={(value) => {this.setState({value}); }}
                        multiple={false}>
                        <Pickable.Item value="foo">Foo</Pickable.Item>
                        <Pickable.Item value="bar">Bar</Pickable.Item>
                    </Pickable>
                );
            }
        }

        const wrapper = mount(<Demo />);
        const activeItem = wrapper.find('.kuma-pickable-item.active');
        expect(activeItem.text()).to.be('Foo');

        const inactiveItem = wrapper.find('.kuma-pickable-item').not('.active');
        inactiveItem.simulate('click');
        const newActiveItem = wrapper.update().find('.kuma-pickable-item.active');
        expect(newActiveItem.text()).to.be('Bar');
    });

    it('should be able to pick multiple items', () => {
        class Demo extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    value: [],
                }
            }

            render() {
                return (
                    <Pickable value={this.state.value}
                        onChange={(value) => {this.setState({value}); }}>
                        <Pickable.Item value="foo">Foo</Pickable.Item>
                        <Pickable.Item value="bar">Bar</Pickable.Item>
                    </Pickable>
                );
            }
        }

        const wrapper = mount(<Demo />);
        const items = wrapper.find('.kuma-pickable-item');
        items.forEach(item => item.simulate('click'));
        const activeItems = wrapper.update().find('.kuma-pickable-item.active');
        expect(activeItems.length).to.be(2);
    });
});

describe('Uxcore Pickable', () => {
    let div;
    beforeEach(() => {
        div = document.createElement('div');
        document.body.appendChild(div);
    });

    afterEach(() =>{
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should be able to fold items', () => {
        class Demo extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    value: [],
                }
            }

            render() {
                return (
                    <div style={{ width: 400 }}>
                        <Pickable value={this.state.value} enableFold={true}>
                            <Pickable.Item value="a">Item A</Pickable.Item>
                            <Pickable.Item value="b">Item B</Pickable.Item>
                            <Pickable.Item value="c">Item C</Pickable.Item>
                            <Pickable.Item value="d">Item D</Pickable.Item>
                            <Pickable.Item value="e">Item E</Pickable.Item>
                            <Pickable.Item value="f">Item F</Pickable.Item>
                            <Pickable.Item value="g">Item G</Pickable.Item>
                            <Pickable.Item value="h">Item H</Pickable.Item>
                            <Pickable.Item value="i">Item I</Pickable.Item>
                            <Pickable.Item value="j">Item J</Pickable.Item>
                        </Pickable>
                    </div>
                );
            }
        }

        const instance = ReactDOM.render(<Demo />, div);
        const outerHeight = $('.kuma-pickable').height();
        const innerHeight = $('.kuma-pickable-items-inner').height();
        const isFolded = outerHeight < innerHeight;

        expect(isFolded).to.be(true);
    });
});