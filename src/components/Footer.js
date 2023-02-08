import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Jack's Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/jeco1988" target="_blank" rel="noreferrer">
            Jack Economos
          </a>
          <br></br>
          <hr />
          <a
            href="https://www.linkedin.com/in/jackeconomos/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
          <br></br>
          <a
            href="https://github.com/jeco1988"
            target="_blank" rel="noreferrer"
          >
            GitHub
          </a>
          <br></br>
          <a
            href="https://twitter.com/JackEconomos"
            target="_blank" rel="noreferrer"
          >
            Twitter
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;