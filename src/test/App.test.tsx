import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the main portfolio sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /thoughtful systems\./i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /work with a purpose\./i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /engineer by craft\./i })).toBeInTheDocument();
  });
});
