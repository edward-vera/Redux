import Dashboard from "../components/Dashboard";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Dashboard)