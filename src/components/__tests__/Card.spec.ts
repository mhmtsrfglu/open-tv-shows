import Card from "@/components/Card.vue";
import type { IShow } from "@/interfaces/IShow";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

const testData: IShow = {
  id: 6,
  genres: ["Action", "Adventure", "Science-Fiction"],
  image: {
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/257/642675.jpg",
  },
  language: "English",
  name: "The 100",
  rating: {
    average: 7,
  },
  runtime: 60,
  schedule: {
    days: ["Thursday"],
    time: "20:00",
  },
  status: "Ended",
  summary:
    "<p>Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying \"Ark\" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth's surface to test whether it's habitable.</p>",
  type: "Scripted",
};

describe("Card.vue", () => {
  it("should show movie info properly", () => {
    const wrapper = mount(Card, { props: { show: testData } });

    expect(wrapper.element.querySelector("#name")?.textContent).toEqual(
      testData.name
    );

    expect(
      wrapper.element.querySelector("#card-image")?.getAttribute("src")
    ).toEqual(testData.image.original);

    expect(wrapper.element.querySelector("#avarage")?.textContent).toEqual(
      testData.rating.average.toString()
    );
  });
});
