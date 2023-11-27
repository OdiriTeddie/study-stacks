import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

it("samples testing", () => {
  render(<Dashboard />);

  expect(screen.getByText("Dashboard")).toBeTruthy();
});
