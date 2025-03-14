/**
 * @jest-environment jsdom
 */
import Home from "@/app/page";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "@/app/shop/page";

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

describe("Contact", () => {
	it("renders contact heading", () => {
		render(<Contact />);
		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toHaveTextContent("Contact Us");
	});

	it("renders a button", () => {
		render(<Contact />);
		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("dont click");
	});

	it("renders home link", () => {
		render(<Contact />);
		const link = screen.getByRole("link", { name: "Back to Home" });
		expect(link).toHaveAttribute("href", "/");
	});
});

describe("Shop", () => {
	it("renders contact heading", () => {
		render(<Shop />);
		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toHaveTextContent("Shop");
	});
	it("renders home link", () => {
		render(<Contact />);
		const link = screen.getByRole("link", { name: "Back to Home" });
		expect(link).toHaveAttribute("href", "/");
	});
});

