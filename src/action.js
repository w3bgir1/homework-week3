export const addModel = (name, data) => {
    
    return {
        type: 'ADD_MODEL',
        payload: {name, ...data}
    }
}