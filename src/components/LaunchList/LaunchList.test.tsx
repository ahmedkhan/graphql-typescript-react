import React from 'react';
import Enzyme, { ShallowWrapper,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import LaunchList from './LaunchList';


Enzyme.configure({ adapter: new Adapter() });


describe("<LaunchList />", () => {
  test("should display a blank LaunchList, with remember me checked by default", async () => {
    // ???
  });
});
