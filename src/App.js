import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import { items } from "./data/items";
import Search from "./components/Search";
import { options } from "./data/options";
import Translate from "./components/Translate";

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropDown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button className="button" onClick={() => setShowDropDown(!showDropdown)}>
        Show Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
      <br></br>
      <p style={{ color: `${selected.value}` }}>
        This text is {selected.value}
      </p> */}

      <Translate />
    </div>
  );
};

export default App;
