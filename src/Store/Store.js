import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { RootReducer } from './RootReducer';

//root-reducer
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const Store = createStore(RootReducer, undefined, composedEnhancers);