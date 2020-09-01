import * as ActionTypes from './type'


export const increaseCountAction = (number) => ({
    type: ActionTypes.INCREASE_COUNT,
    number:number,
});

export const decreaseCountAction = (number) => ({
    type: ActionTypes.DECREASE_COUNT,
    number:number,
})