import { Col, Layout, Row } from "antd";
import { useSelector } from "react-redux";
import { RecipeBrowser } from "../browser/RecipeBrowser";

export const CarberateContent = () => {
    return (
        <Layout.Content>
            <Row>
                <Col style={{ flexShrink: 1, flexGrow: 0 }}>
                    <RecipeBrowser />
                </Col>
                <Col flex={1}></Col>
            </Row>
        </Layout.Content>
    );
};
