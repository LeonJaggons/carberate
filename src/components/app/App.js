import { loadIngredients } from "../../redux/appActions";
import { useDispatch } from "react-redux";
import {
    Button,
    Card,
    FormGroup,
    H1,
    H5,
    Icon,
    InputGroup,
} from "@blueprintjs/core";
function App() {
    const dispatch = useDispatch();
    dispatch(loadIngredients());
    return (
        <div
            style={{
                width: "100%",
                maxHeight: "100%",
                display: "flex",
                flexFlow: "row nowrap",
            }}
        >
            <RecipeBrowser />
        </div>
    );
}

const RecipeBrowser = () => {
    return (
        <div style={{ width: "100%", padding: 8 }}>
            <Card title="Search">
                <H5>Search Recipes</H5>
                <FormGroup>
                    <InputGroup
                        placeholder={"Search recipes..."}
                        leftIcon={<Icon icon={"search"} />}
                    />
                </FormGroup>
            </Card>
        </div>
    );
};

export default App;
