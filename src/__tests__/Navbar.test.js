/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavMenu from "../components/Navbar";

describe("NavMenu component", () => {
  test("renders the link to the Raghad page", () => {
    render(
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>
    );

    // Check if the "Top U.S. Schools" link exists and points to the correct route
    const schoolsLink = screen.getByRole("link", { name: /Top U\.S\. Schools/i });
    expect(schoolsLink).toHaveAttribute("href", "/Raghad");
  });
});
