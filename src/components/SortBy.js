import React from "react"

import Select from "react-select"

const SortBy = (props) => {
  return (
    <div>
      <label className="form-label me-2">Sort by</label>
      <Select
        instanceId="sortBySelect"
        options={props.data}
        defaultValue={props.data[0]}
        className="dropdown bootstrap-select"
        classNamePrefix="selectpicker"
      />
    </div>
  )
}

export default SortBy
