import React from "react";
import { shallow } from "enzyme";
import StarshipDetails from "./starship-details";

describe("StarshipDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StarshipDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
