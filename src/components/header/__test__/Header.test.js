import {render, screen} from "@testing-library/react";
// import {BrowserRouter} from "react-router-dom";
import Header from "../Header";

const mockedSetSearchValue = jest.fn();

describe("Header", () => {
	it("should render input value", () => {
		render(<Header searchvalue={""} setSearchValue={mockedSetSearchValue} />);
		const inputElement = screen.getByPlaceholderText(/Search for anything/i);

		expect(inputElement).toBeInTheDocument();
	});
});
