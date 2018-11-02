import {connect} from 'react-redux'
import Menu from '../components/Menu'
import * as actions from '../actions'

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        homePage: state.NavigationReducer.homePage,
        eventPage: state.NavigationReducer.eventPage
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        showEvent: () => dispatch(actions.showEventPage()),
        showHome: () => dispatch(actions.showHomePage()),
        onUpdateClick: event => dispatch((
        actions.updateTodo(event.target.value)
    )),
}
}

// Connected Component
const MapMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);


export default MapMenu;
