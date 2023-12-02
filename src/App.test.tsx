import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
