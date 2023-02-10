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
