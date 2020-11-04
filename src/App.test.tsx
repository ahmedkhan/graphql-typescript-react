import React from 'react';
import Enzyme, { ShallowWrapper,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import App from './App';
import LaunchProfile from './components/LaunchProfile';
import LaunchList from './components/LaunchList';

Enzyme.configure({ adapter: new Adapter() });
 
describe("App", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => (container = shallow(<App />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })

  it("should render the LaunchProfile Component", () => {
    expect(container.containsMatchingElement(<LaunchProfile />)).toEqual(true)
  })


  it("should render the LaunchList Component", () => {
    expect(container.containsMatchingElement(<LaunchList />)).toEqual(true)
  })

  
})

 