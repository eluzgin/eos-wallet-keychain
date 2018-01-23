import profileReducer from "./profile-reducer";
import localforage from "localforage";
import { persistReducer } from "redux-persist";

export default persistReducer(
  {
    key: `wallet-profiles`,
    storage: localforage
  },
  profileReducer
);
