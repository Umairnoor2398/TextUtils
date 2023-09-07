import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var txt = document.getElementById("txt");
    txt.select();
    txt.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  return (
    <>
      <h1 className={`${props.mode === "light" ? "text-dark" : "text-light"}`}>
        Enter your Text to Analyze
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="txt"
          rows="10"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button
        onClick={handleUpClick}
        className={`btn btn-primary m-2 ${
          props.mode === "light" ? "text-light" : "text-light"
        }`}
      >
        Convert to Upper Case
      </button>
      <button
        onClick={handleLowClick}
        className={`btn btn-primary m-2 ${
          props.mode === "light" ? "text-light" : "text-light"
        }`}
      >
        Convert to Lower Case
      </button>
      <button
        onClick={handleCopy}
        className={`btn btn-primary m-2 ${
          props.mode === "light" ? "text-light" : "text-light"
        }`}
      >
        Copy
      </button>
      <button
        onClick={handleExtraSpaces}
        className={`btn btn-primary m-2 ${
          props.mode === "light" ? "text-light" : "text-light"
        }`}
      >
        Remove Extra Spaces
      </button>

      <div
        className={`container my-2 ${
          props.mode === "light" ? "text-dark" : "text-light"
        }`}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>

        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter Something above to Preview Here"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
