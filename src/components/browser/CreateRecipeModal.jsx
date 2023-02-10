import {
    Button,
    Col,
    Input,
    InputNumber,
    Modal,
    Row,
    Select,
    Space,
    Typography,
    Upload,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateRecipe } from "../../redux/appActions";

export const CreateRecipeModal = () => {
    const dispatch = useDispatch();
    const showCreateModal = useSelector((state) => state.app.showCreateModal);
    const handleClose = () => dispatch(closeCreateRecipe());
    return (
        <Modal
            title={"Create New Recipe"}
            open={showCreateModal}
            onCancel={handleClose}
            width={"85vw"}
        >
            <RecipeForm />
        </Modal>
    );
};

const RecipeForm = () => {
    const [fileList, setFileList] = useState([]);
    const handleChange = (e) => {
        setFileList(e.fileList);
    };
    return (
        <Space style={{ width: "100%" }} direction={"vertical"}>
            <Input size={"large"} placeholder={"Title"} />
            <Upload
                fileList={fileList}
                listType={"picture-card"}
                onChange={handleChange}
            >
                <UploadButton />
            </Upload>
            <IngredientsInput />
        </Space>
    );
};

const UploadButton = () => {
    return <Button type={"default"}>Upload</Button>;
};

const IngredientsInput = () => {
    const [ingredients, setIngredients] = useState([]);
    return (
        <Space style={{ width: "100%" }} direction={"vertical"} size={"small"}>
            <Row gutter={4} style={{ width: "100%" }}>
                <Col span={4}>
                    <Typography.Title
                        style={{ margin: 0, fontSize: 14 }}
                        level={5}
                    >
                        Quantity
                    </Typography.Title>
                </Col>
                <Col flex={8}>
                    <Typography.Title
                        style={{ margin: 0, fontSize: 14 }}
                        level={5}
                    >
                        Ingredient
                    </Typography.Title>
                </Col>
                <Col span={8}>
                    <Typography.Title
                        style={{ margin: 0, fontSize: 14 }}
                        level={5}
                    >
                        Notes
                    </Typography.Title>
                </Col>
            </Row>
            <IngredientItem />
            <IngredientItem />
            <IngredientItem />
        </Space>
    );
};

const SelectUnits = () => {
    return (
        <Select
            style={{ flex: 1, minWidth: 60 }}
            options={[
                { label: "tsp", value: "tsp" },
                { label: "tbsp", value: "tbsp" },
                { label: "oz", value: "oz" },
                { label: "fl. oz", value: "fl. oz" },
                { label: "c", value: "c" },
                { label: "qt", value: "qt" },
                { label: "pt", value: "pt" },
                { label: "gal", value: "gal" },
            ]}
        />
    );
};
const IngredientItem = () => {
    const [unit, setUnit] = useState();
    const [quant, setQuant] = useState();
    const [ingred, setIngred] = useState();
    return (
        <Row gutter={4} style={{ width: "100%" }}>
            <Col span={4}>
                <InputNumber
                    style={{ width: "100%" }}
                    step={0.25}
                    addonAfter={
                        <SelectUnits setUnit={setUnit} setQuant={setQuant} />
                    }
                />
            </Col>
            <Col flex={1}>
                <Input />
            </Col>
            <Col span={8}>
                <Input />
            </Col>
        </Row>
    );
};
