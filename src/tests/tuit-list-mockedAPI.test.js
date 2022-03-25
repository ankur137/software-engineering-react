import {Tuits} from "../components/tuits/index";
import {screen} from "@testing-library/react";
import {render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

jest.mock('axios');
const MOCKED_TUITS = [
    {tuit: "alice's tuit",postedBy:'alice123', _id:"6201d14ed4a5094d1244cdf0"},
    {tuit: "bob's tuit",postedBy:'bob123',  _id:"6201d14ed4a5094d1244cdf1"},
    {tuit: "charlie's tuit",postedBy:'bob123',  _id:"6201d14ed4a5094d1244cdf2"}
];

//test tuit list renders mocked
test('tuit list renders mocked', async () => {
    axios.get.mockImplementation(() =>
        Promise.resolve({ data: {tuits: MOCKED_TUITS} }));
    const response = await findAllTuits();
    const tuits = response.tuits;
    render(
        <HashRouter>
            <Tuits tuits={tuits}/>
        </HashRouter>);
    const tuit = screen.getByText(/charlie's tuit/i);
    expect(tuit).toBeInTheDocument();
});
