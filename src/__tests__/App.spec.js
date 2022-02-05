import App from "../App.svelte";
import { render, screen } from "@testing-library/svelte";

describe("App", () => {
  it("renders a title", () => {
    render(App);
    screen.getByText("Musicle");
  });
});
