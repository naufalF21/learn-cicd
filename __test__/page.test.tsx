/**
 * @jest-environment jsdom
 */
import Home from "@/app/page";
import About from "@/app/about/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toBeInTheDocument();
	});
});

describe("About", () => {
	it("renders about text", () => {
		render(<About />);
		const aboutElement = screen.getByText("About");
		expect(aboutElement).toBeInTheDocument();
	});
});

