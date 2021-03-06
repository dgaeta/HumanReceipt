// src/components/__tests__/AppHome.tsx

import * as React from 'react';
import { Text } from 'react-native';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import AppContext from '../AppContext';

it('renders correctly with defaults', () => {
    configure({ adapter: new Adapter() });
    const hello = shallow(<AppContext name="World" />);
    expect(hello.find(Text).render().text()).toEqual("Hello World!");
})