import {render, screen, cleanup} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Pagination from "../Pagination";

const mockedPagination = () => {
	<BrowserRouter>
		<Pagination />
	</BrowserRouter>;
};

describe("Pagination", () => {
	afterEach(() => {
		cleanup();
	});

	test("should be in the document", () => {
		render(<mockedPagination />);
		const paginateNextElement = screen.getByTestId("paginateNext");
		expect(paginateNextElement).toBeInTheDocument();
	});
});
