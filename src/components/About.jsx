import React, { useState } from "react";

const About = (props) => {
  return (
    <section
      id="about"
      className={`${props.mode === "light" ? "text-dark" : "text-light"}`}
    >
      <h2>About TextUtils</h2>
      <p>
        TextUtils is a simple text manipulation tool that allows you to perform
        various operations on text. You can use TextUtils to:
      </p>
      <ul>
        <li>Convert text to uppercase</li>
        <li>Convert text to lowercase</li>
        <li>Copy text to the clipboard</li>
        <li>Remove extra spaces from text</li>
        <li>Count words in the text</li>
        <li>Count characters in the text</li>
        <li>Calculate the average reading speed of the text</li>
      </ul>
      <p>
        TextUtils is a versatile tool that can assist you in managing and
        analyzing text content effectively.
      </p>
    </section>
  );
};

export default About;
