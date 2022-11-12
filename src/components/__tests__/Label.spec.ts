import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Label from "@/components/Label.vue";

describe("Label.vue", () => {
  it("renders properly", () => {
    const wrapper = mount(Label, { props: { label: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
