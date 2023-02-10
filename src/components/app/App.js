import { Layout } from "antd";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { CarberateContent } from "./CarberateContent";
import { CarberateHeader } from "./CarberateHeader";

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <CarberateHeader />
                <CarberateContent />
            </Layout>
        </Provider>
    );
}

export default App;
