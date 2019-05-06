import { connect } from 'react-redux';
import Calculator from '../presentational/Calculator';
import { addExpression } from '../../redux/actions';
import { BUTTON_LIST } from '../../constants/constants';

const mapStateToProps = (state) => {
    return {
        expression: state.expression,
        message: state.message,
        BUTTON_LIST: BUTTON_LIST
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addExpression: (payload, expression) => dispatch(addExpression(payload, expression))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Calculator);