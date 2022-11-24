import Home from "../components/Home";
import { connect } from 'react-redux';


//* The mapStateToProps() function takes in state, and we return an object that
//* maps the values to the states defined in state.js.
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
    }
}

export default connect(mapStateToProps)(Home);