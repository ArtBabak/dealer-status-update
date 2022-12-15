import { actions } from "./index";

const initialState = {
  status: "offline",
  updatedAt: "waiting for response...",
  data: {},
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATUS:
      return { ...state, status: action.payload };

    case actions.GET_RESPONSE:
      return {
        ...state,
        data: action.payload.data,
        updatedAt: action.payload.updatedAt,
        status: action.payload.status,
      };

    default:
      return state;
  }
}
