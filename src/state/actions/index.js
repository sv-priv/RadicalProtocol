export const addProvider = (provider) => {
    // return an action
    return (dispatch) => {
            dispatch({
                type: "ethersProvider",
                payload: provider
        });
    };
}