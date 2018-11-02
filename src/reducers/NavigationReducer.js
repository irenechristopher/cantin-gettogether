export default function NavigationReducer(state = {
    homePage: false,
    eventPage: false
}, action) {
    switch (action.type) {
        case 'showHomePage':
            return {
                homePage: true,
                eventPage: false
            }
        case 'showEventPage':
            return {
                homePage: false,
                eventPage: true
            }
        default:
            return state
    }
}
