import { combineReducers } from 'redux';
import userReducer from './User/UserReducer';
import cartReducer from './Cart/CartReducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import directoryReducer from './Directory/DirectoryReducer';
import shopReducer from './Shop/ShopReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)