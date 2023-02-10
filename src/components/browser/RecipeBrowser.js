import { Button, Card, Col, Input, Row, Select, Space, Typography } from "antd";
import { useEffect } from "react";

import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreateRecipe } from "../../redux/appActions";
import { CreateRecipeModal } from "./CreateRecipeModal";
export const RecipeBrowser = () => {
    const dispatch = useDispatch();
    const showCreateModal = useSelector((state) => state.app.showCreateModal);

    const handleToggleCreateRecipe = () => {
        dispatch(toggleCreateRecipe());
    };

    useEffect(() => {
        console.log(showCreateModal);
    }, [showCreateModal]);

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
                    onClick={handleToggleCreateRecipe}
                    icon={
                        <IoAddCircle
                            style={{
                                justifySelf: "center !important",
                                marginRight: 4,
                            }}
                        />
                    }
                >
                    Create New Recipe
                </Button>
                <CreateRecipeModal />
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
