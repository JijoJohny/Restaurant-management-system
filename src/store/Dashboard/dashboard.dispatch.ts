import {dashboardActionTypes} from './dashboard.actions';
import {OrderState} from "../Order/order.types";
import {Dispatch} from "redux";


export const addOrderToQueue = (order: OrderState, dispatch: Dispatch) => {
    return dispatch({ type: dashboardActionTypes.ADD_ORDER_TO_QUEUE, newOrder: order })
}