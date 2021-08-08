export const addProvider = (provider) => {
    // return an action
    return (dispatch) => {
            dispatch({
                type: "objectTest",
                payload: provider
        });
    };
}

export const ethersProviderAction = (provider) => {
    return (dispatch) => {
        dispatch({
            type: "ethersProvider",
            payload: provider
        })
    }
}