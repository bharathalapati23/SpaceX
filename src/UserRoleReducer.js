const setUserRole = (state = { role: '' }, action) => {
    switch (action.type) {
        case 'set':
            let newState = { role: action.payload }
            return newState
        default:
            return state
    }
}

export default setUserRole
