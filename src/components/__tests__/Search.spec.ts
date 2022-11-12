import { describe, it, expect, beforeEach } from "vitest";

import { mount, VueWrapper } from "@vue/test-utils";
import Search from "@/components/Search.vue";

describe("Search.vue", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(Search, {});
  });

  it("should be instantiated", () => {
    mount(Search, {});
  });

  it("search props should be empty at the first", () => {
    expect(wrapper.vm.$data.search).to.equal("");
  });

  it(" should exist input and button", () => {
    expect(wrapper.element.querySelector("input")).to.exist;
    expect(wrapper.element.querySelector("button")?.type).toEqual("submit");
  });

  it("should update query when value changed", () => {
    const input = wrapper.element.getElementsByTagName("input")[0];
    input.value = "test";
    input.dispatchEvent(new Event("input"));
    expect(wrapper.vm.$data.search).toEqual("test");
  });
});
