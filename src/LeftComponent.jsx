import React from "react";
class LeftComponent extends React.Component {
  render() {
    return (
      <div className="p-4">
        <span>
          <h1>NotesApp</h1>
        </span>
        <button type="button" className="btn btn-primary">
          Add
        </button>
        <div className="list-group mt-4 p-4">
          <a
            href="#"
            //active
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
        </div>
      </div>
    );
  }
}

export default LeftComponent;
