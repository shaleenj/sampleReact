import { connect } from 'react-redux';
import { WorkArea } from './Workarea';

export function mapDispatchToProps(dispatch) {
    return {};
}

export function mapStateToProps(state) {
    const currentView = state.appReducer && state.appReducer.currentView 
        ? state.appReducer.currentView 
        : 'Home';
    return {
        currentView
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkArea)