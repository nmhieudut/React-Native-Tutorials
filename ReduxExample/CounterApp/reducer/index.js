import * as ActionTypes from '../action/type'
const defaultState = { count: 0 };

export default function (state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.INCREASE_COUNT:
            return Object.assign({}, state, {
                count: state.count + action.number
            });
        case ActionTypes.DECREASE_COUNT:
            return Object.assign({}, state, {
                count: state.count - action.number
            });
        default:
            return state;
    }
}