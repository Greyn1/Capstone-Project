import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { RootReducer } from './RootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

//root-reducer
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const Store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(Store);