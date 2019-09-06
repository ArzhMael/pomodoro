import React from "react";
import ReactDOM from "react-dom";

import "../scss/app.scss";

import Pomodoro from "./components/pomodoro";

ReactDOM.render(<Pomodoro />, document.querySelector("#pomodoro"));
