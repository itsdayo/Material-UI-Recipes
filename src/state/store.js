import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers"; //Import the reducer
import { createLogger } from "redux-logger";
const persistConfig = {
  key: "root",
  storage,
};
const rLogger = createLogger();
const persistedReducer = persistReducer(persistConfig, reducers);
// Connect our store to the reducers
//export default ( createStore(reducers, applyMiddleware(rLogger, thunk))

export const store = createStore(
  persistedReducer,
  applyMiddleware(rLogger, thunk)
);

export const persistor = persistStore(store);
