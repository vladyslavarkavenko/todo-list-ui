export const getAsyncActionWrapper = ({ setIsLoading, setError }) => (asyncAction) => {
    return (payload) => async (dispatch) => {
        try {
            dispatch(setError(null));
            dispatch(setIsLoading(true));
            await asyncAction(payload, dispatch);
        } catch(error) {
            console.error(error);
            dispatch(setError(error.response?.data || error.message));
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}