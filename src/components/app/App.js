import { loadIngredients, setAppState } from "../../redux/appActions";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    Card,
    FormGroup,
    H1,
    H2,
    H3,
    H5,
    Colors,
    Icon,
    InputGroup,
    Tabs,
    Tab,
    EditableText,
} from "@blueprintjs/core";
import { useEffect, useState } from "react";
function App() {
    const dispatch = useDispatch();
    dispatch(loadIngredients());
    const appState = useSelector((state) => state.app.appState);
    const [content, setContent] = useState(<RecipeBrowser />);
    const handleContent = () => {
        switch (appState) {
            case "BROWSE":
                return setContent(<RecipeBrowser />);
            case "CREATE":
                return setContent(<RecipeCreator />);
            default:
                setContent(null);
        }
    };
    useEffect(() => {
        console.log(appState);
        handleContent();
    }, [appState]);
    return (
        <div
            style={{
                width: "100%",
            }}
        >
            <CarberateHeader />
            <div
                style={{
                    width: "100%",
                    maxHeight: "100%",
                    display: "flex",
                    flexFlow: "row nowrap",
                }}
            >
                {content}
            </div>
        </div>
    );
}

const CarberateHeader = () => {
    const navNewRecipe = () => {
        setAppState("CREATE");
    };
    return (
        <div
            style={{
                width: "100%",
                padding: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            {/* <div style={{ display: "flex", alignItems: "center" }}>
                <H2 style={{ margin: 0, marginLeft: 4 }}>Carberate</H2>
            </div> */}
            <Button onClick={navNewRecipe} icon={"add"} intent={"primary"}>
                Add New Recipe
            </Button>
        </div>
    );
};

const RecipeBrowser = () => {
    return (
        <div style={{ width: "100%", padding: 8 }}>
            <Card title="Search">
                <FormGroup>
                    <InputGroup
                        placeholder={"Search recipes..."}
                        leftIcon={"search"}
                    />
                </FormGroup>
            </Card>
            <RecipeViewer />
        </div>
    );
};

const RecipeViewer = () => {
    return (
        <div style={{ marginTop: 12 }}>
            <Tabs large>
                <Tab id={"review"} title={"Recipes to Review"} />
                <Tab id={"past"} title={"Past Recipes"} />
            </Tabs>
        </div>
    );
};

const RecipeCreator = () => {
    return (
        <div style={{ padding: 12, width: "100%" }}>
            <Card>
                <H1>
                    <EditableText placeholder={"Recipe Title"} />
                </H1>
            </Card>
        </div>
    );
};
export default App;
