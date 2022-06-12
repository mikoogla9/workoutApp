import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./Filter.css";

function Filter(props) {
  const [name, setName] = React.useState("");

  let filterList = [];
  for (let index = 0; index < props.Names.length; index++) {
    let p = props.Names[index];
    filterList.push(
      <MenuItem key={p} value={p}>
        {p}
      </MenuItem>
    );
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // setName(event.target.value);
    setName(value);
    props.onFilterChoice(value);
  };

  return (
    <div className="filter">
      <div>Wybrany filter: {name}</div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={name}
          onChange={handleChange}
        >
          <MenuItem value="">None</MenuItem>
          {filterList}
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;