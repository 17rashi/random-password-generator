import React from "react";
import "./aboutElement.css";

const about = () => {
  return (
    <div className="middleDiv">
      <h1>About Our Project</h1>
      <p>
        <br />
        Random password generator to generate random password with high
        security. Generally, random passwords have various benefits in addition
        to the user-selected password where they improve security and
        confidentiality.
      </p>
      <br />
      <p>
        Passwords are very necessary aspects for login and must be strong enough
        such that it is random and does not have any dictionary word. It also
        must contain special character along with alpha-numeric. Such passwords
        are harder to generate randomly by human and is easy to forget due to
        complexity of passwords. Create a portal (website) for the end user to
        generate random passwords by selecting their requirements and length.{" "}
        <br />
        <br />
        User shall also be able to check and determine the strength of an
        existing password on the same portal. Since these generated passwords
        are very complex and easy to forget, storing passwords for the user in
        their account shall be feature to be implemented.
      </p>
      <br />
      <p>
        Our project is web based and there are different topics that require
        research and learning. Our team already had prerequisite knowledge on
        web development and therefore we chose to opt for this project
      </p>
      <br />

      <div>
        <ol>
          Tech Stacks:
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>
      </div>
    </div>
  );
};

export default about;
