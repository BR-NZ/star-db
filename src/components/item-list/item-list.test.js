import React from "react";
import { shallow } from "enzyme";
import ItemList from "./item-list";

describe("ItemList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ItemList />);
    expect(wrapper).toMatchSnapshot();
  });
});
