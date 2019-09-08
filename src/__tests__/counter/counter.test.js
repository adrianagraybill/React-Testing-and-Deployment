import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../components/counter/counter.js';
describe('Does counter work', () => {

  it('<Counter />', () => {
    let component = shallow(<Counter />);
    expect(component.find('span').exists()).toBeTruthy();
  });

  it('the plus button increases the count', () => {
    let component = mount(<Counter />);
    let button = component.find('#increment');
    button.simulate('click');
    expect(component.state('count')).toBe(+1);
  });

  it('the minus button decreases the count', () => {
    let component = mount(<Counter />);
    let button = component.find('#decrement');
    button.simulate('click');
    expect(component.state('count')).toBe(-1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});