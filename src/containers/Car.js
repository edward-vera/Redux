import Car from "../components/Car";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)