import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";
import {
  login,
  token,
  registration,
  forgetpassword
} from "../components/auth/reducer";

import {
  countries,
  attestationrate,
  documenttypes
} from "../components/servicerequest/reducer";

import { dashboard } from "../components/dashboard/reducer";

const config = {
  key: "primary",

  storage,
  blacklist: [
    "login",
    "registration",
    "forgetpassword",
    "attestationrate",
    "countries",
    "documenttypes",
    "dashboard"
  ]
};

const combinedReducers = {
  login,
  token,
  registration,
  forgetpassword,
  countries,
  attestationrate,
  documenttypes,
  dashboard
};

export default persistCombineReducers(config, combinedReducers);
