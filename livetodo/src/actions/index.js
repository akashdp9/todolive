//Action creator
export const createTodo = (items) => {
    //Return an action
    return {
        type: 'ITEM_CREATED',
        payload: items
    };
};