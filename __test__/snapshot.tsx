/**
 * @jest-environment jsdom
 */
import Home from "@/app/page";
import About from "@/app/about/page";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
	const { container } = render(<Home />);
	expect(container).toMatchSnapshot();
});

it("renders about page unchanged", () => {
	const { container } = render(<About />);
	expect(container).toMatchSnapshot();
});

