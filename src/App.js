import React from "react";
import ReactDOM from "react-dom";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <LeftComponent />
          </div>
          <div className="col-8">
            <RightComponent />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
