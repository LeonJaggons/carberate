import { Layout } from "antd";
import { CarberateContent } from "./CarberateContent";
import { CarberateHeader } from "./CarberateHeader";

function App() {
    return (
        <Layout>
            <CarberateHeader />
            <CarberateContent />
        </Layout>
    );
}

export default App;
