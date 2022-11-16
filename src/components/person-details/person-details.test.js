import React from "react";
import { shallow } from "enzyme";
import PersonDetails from "./person-details";

describe("PersonDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PersonDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
