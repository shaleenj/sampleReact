import { connect } from 'react-redux';
import { LeftNav } from './LeftNav';
import { changeView } from '../../actions/AppActions';

export function mapDispatchToProps(dispatch) {
    return {
        changeView: (source) => dispatch(changeView(source))
    }
}

export function mapStateToProps(state) {
    const header = 'Main Menu';
    return {
        header,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav)