import Row from "../Row.svelte";
import { render, screen } from "@testing-library/svelte";

describe("Row", () => {
  it("renders", () => {
    expect(render(Row).container).toMatchSnapshot();
  });

  it("displays a time signature", () => {
    render(Row);
    expect(screen.getByTestId("TimeSignature"));
  });
});
