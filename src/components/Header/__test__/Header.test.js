import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";

// afterEach(cleanup);

it("should render same text passed into title", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});

it("check if the title is correct", () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed in title prop", () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// Find by

it("check if the title is correct", async () => {
  render(<Header title="My header" />);
  const headingElement = await screen.findByTitle("Header"); // whenever you use findBy, then use the use async-await
  expect(headingElement).toBeInTheDocument();
});

// Query by

it("check if the title is correct", () => {
  render(<Header title="My header" />);
  const headingElements = screen.queryByTitle(/dogs/i);
  expect(headingElements).not.toBeInTheDocument();
});

it("check if there are two headings only", async () => {
  render(<Header title="My header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
