import React from "react";
import ScrollToTop from "./components/scrolltotop/scrolltotop";
import Routes from "./router/routes";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="shane_tm_all_wrap">
      <ScrollToTop />
      <Routes />
    </div>
  );
};

export default App;
