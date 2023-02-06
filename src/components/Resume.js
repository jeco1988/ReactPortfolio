import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={"https://github.com/jeco1988/reactportfolio/blob/main/public/img/JackEconomosResume2023.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Click here for my Resume!</span>
        </a>
      </div>
    </div>
  );
}

export default Resume;