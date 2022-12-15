import { actions } from "../store";

const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "medium",
});

export function createSocketConnection() {
  let socket = new WebSocket(
    "wss://dealer-status-reporter-devprem.leverex.io/websocket"
  );
  socket.onopen = function (e) {
    console.log("connected");
  };
  return function (dispatch) {
    socket.onerror = function (e) {
      dispatch({ type: actions.SET_STATUS, payload: "failed" });
    };
    socket.onmessage = function (event) {
      console.log("take data");
      const { data } = JSON.parse(event.data);
      dispatch({
        type: actions.GET_RESPONSE,
        payload: {
          data,
          updatedAt: formatter.format(new Date()),
          status: "connected",
        },
      });
    };
  };
}
