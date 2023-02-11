import store from "../redux/store";
const IngredientsJSON = require("../ingredients.json");

export const setAppState = (newAppState) => {
    store.dispatch({
        type: "SET",
        attr: "appState",
        payload: newAppState,
    });
};
export const loadIngredients = () => {
    return (dispatch) => {
        let ingreds = [];
        const ingredCategories = Object.keys(IngredientsJSON);
        for (let cat of ingredCategories) {
            ingreds.push({
                label: cat,
                options: [
                    ...IngredientsJSON[[cat]].map((ing) => {
                        return {
                            label: ing,
                            value: ing.toUpperCase(),
                        };
                    }),
                ],
            });
        }
        dispatch({
            type: "SET",
            attr: "selectIngredients",
            payload: [...ingreds],
        });
    };
};
export const toggleCreateRecipe = () => {
    return (dispatch, getState) => {
        let showCreateModal = getState().app.showCreateModal;
        dispatch({
            type: "SET",
            attr: "showCreateModal",
            payload: !showCreateModal,
        });
    };
};

export const closeCreateRecipe = () => {
    return (dispatch, getState) => {
        dispatch({
            type: "SET",
            attr: "showCreateModal",
            payload: false,
        });
    };
};
