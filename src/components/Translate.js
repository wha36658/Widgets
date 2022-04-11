import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { lanOptions } from "../data/lanOptions";
import Convert from "./Convert";

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Translate = () => {
  const [language, setLanguage] = useState(lanOptions[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <Dropdown
          label="Select a Language"
          selected={language}
          onSelectedChange={setLanguage}
          options={lanOptions}
        />
        <hr />
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Translate;
