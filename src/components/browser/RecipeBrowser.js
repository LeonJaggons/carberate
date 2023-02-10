import { Button, Card, Col, Input, Row, Select, Space, Typography } from "antd";

export const RecipeBrowser = () => {
    return (
        <div style={{ padding: 12, margin: 8 }}>
            <Space direction={"vertical"} style={{ width: "100%" }}>
                <Typography.Title level={3}>Recipes</Typography.Title>
                <RecipeFilter />
                <RecipeList />
                <Button
                    block
                    size={"large"}
                    type={"primary"}
                    style={{ fontWeight: "bold" }}
                >
                    Create New Recipe
                </Button>
            </Space>
        </div>
    );
};

const RecipeFilter = () => {
    return (
        <Space style={{ width: "100%" }} direction={"vertical"}>
            <Input size={"large"} placeholder={"Search recipes.."}></Input>
            <Row gutter={4}>
                <Col flex={1}>
                    <Select
                        size={"large"}
                        placeholder={"Meal type?"}
                        style={{ width: "100%" }}
                    />
                </Col>
                <Col flex={1}>
                    <Select
                        size={"large"}
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Meal tags?"
                        allowClear
                    />
                </Col>
            </Row>
        </Space>
    );
};
const RecipeList = () => {
    return (
        <Row gutter={[6, 6]}>
            <RecipePreview
                title={"Breakfast Burritos"}
                preview={"Laboris id cillum labore tempor pariatur."}
            />
            <RecipePreview
                title={"Breakfast Burritos"}
                preview={"Laboris id cillum labore tempor pariatur."}
            />
            <RecipePreview
                title={"Breakfast Burritos"}
                preview={"Laboris id cillum labore tempor pariatur."}
            />
            <RecipePreview
                title={"Breakfast Burritos"}
                preview={"Laboris id cillum labore tempor pariatur."}
            />
        </Row>
    );
};

const RecipePreview = ({ title, preview }) => {
    return (
        <Col span={12} style={{ width: 150 }}>
            <Card
                hoverable
                style={{ width: "100%" }}
                bodyStyle={{ overflowX: "hidden" }}
            >
                <Typography.Title level={5}>{title}</Typography.Title>
                {preview}
            </Card>
        </Col>
    );
};
