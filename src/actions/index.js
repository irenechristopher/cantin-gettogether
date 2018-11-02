//Action Creator
export const increaseTodo = () => {
    return {
        type: 'increase',
    }
}

export const updateTodo = (wish_value) => {
    return {
        type: 'update',
        wish_value: wish_value,
    }
}

export const showHomePage = () => {
    return {
        type: 'showHomePage',
    }
}

export const showEventPage = () => {
    return {
        type: 'showEventPage',
    }
}
