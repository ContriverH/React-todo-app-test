import { render, screen, cleanup } from "@testing-library/react";
import TodoFooter from "../TodoFooter ";

// afterEach(cleanup);

it("should render the correct amount of incomplete tasks", async () => {
  render(<TodoFooter title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
