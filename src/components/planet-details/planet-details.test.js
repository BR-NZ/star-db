import React from "react";
import { shallow } from "enzyme";
import PlanetDetails from "./planet-details";

describe("PlanetDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PlanetDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
