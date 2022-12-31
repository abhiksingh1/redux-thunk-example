export const deleteData = () => {
    return ({
        type: 'DELETE_DATA'
    })
}

export const addData = ()=>{
    return async (dispatch, getState) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        dispatch({
            type: 'ADD_DATA',
            payload: data
        })
    }
}