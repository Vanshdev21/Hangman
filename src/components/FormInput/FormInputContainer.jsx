import { useNavigate } from "react-router";
import FormInput from "./FormInput";
import { useState } from "react";
function FormInputContainer() {
  const [type, setType] = useState("password");
  const [value, setValue] = useState("");
  const navigate = useNavigate(); // return navigator function

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(value);
    if (value) {
      navigate("/play", {
        state: {
          value: value,
        },
      });
    }
  }
  function handleTextInputChange(e) {
    setValue(e.target.value);
  }
  function onToggleBtnClick() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }
  return (
    <FormInput
      value={value}
      type={type}
      onToggleBtnClick={onToggleBtnClick}
      formSubmitHandler={formSubmitHandler}
      handleTextInputChange={handleTextInputChange}
    />
  );
}

export default FormInputContainer;
