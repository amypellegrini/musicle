import TimeSignature from "../TimeSignature.svelte";
import { render, screen } from "@testing-library/svelte";

describe("TimeSignature", () => {
  it("renders", () => {
    expect(render(TimeSignature).container).toMatchSnapshot();
  });
});
