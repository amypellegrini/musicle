import App from "../App.svelte";
import { render, screen } from "@testing-library/svelte";

describe("App", () => {
  it("displays a title", () => {
    render(App);
    screen.getByText("Musicle");
  });

  it("displays six rows", () => {
    render(App);
    const rows = screen.queryAllByTestId("Row");
    expect(rows.length).toBe(6);
  });
});
