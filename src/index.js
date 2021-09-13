import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
// React hook 사용하기 연습용 컴포넌트
// import SimpleHabit from "./components/simpleHabit";
import "@fortawesome/fontawesome-free/js/all.js";

ReactDOM.render(
  // 실제 배포할 때는 로그가 두번씩 나오지 않음
  <React.StrictMode>
    <App />
    {/* <SimpleHabit /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
