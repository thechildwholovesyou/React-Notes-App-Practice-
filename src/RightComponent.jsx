import React from "react";
import ReactDOM from "react-dom";

class RightComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="input-group mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Description"
            id="floatingTextarea2"
            style={{ height: "200px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Description</label>
        </div>
      </div>
    );
  }
}

export default RightComponent;
