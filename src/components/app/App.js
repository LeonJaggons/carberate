import { Layout } from "antd";
import { Provider } from "react-redux";
import { loadIngredients } from "../../redux/appActions";
import { CarberateContent } from "./CarberateContent";
import { CarberateHeader } from "./CarberateHeader";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    dispatch(loadIngredients());
    return (
        <Layout>
            <CarberateHeader />
            <CarberateContent />
        </Layout>
    );
}

export default App;
