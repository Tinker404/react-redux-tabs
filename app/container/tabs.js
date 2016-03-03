import { connect } from 'react-redux'
import { tabChange } from '../action'
import Tabs from '../component/tab'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        tabChange: (active) => {
            dispatch(tabChange(active))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs)