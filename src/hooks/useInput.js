import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
    setError("");
  };

  return [value, onValueChangeHandler];
}

export default useInput;
