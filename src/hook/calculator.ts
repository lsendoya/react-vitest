import { evaluate, isNumber } from "mathjs";
import { useState } from "react";

export function SetCalculate() {
  const [value, setValue] = useState("");
  const [toogle, setToogle] = useState(false);
  const [isON, setON] = useState(false);

  const handleONOFF = () => () => {
    if (value === "") {
      setON(!isON);
      setValue("0");
      return;
    }
    setON(!isON);
    setValue("");
  };

  const handleClickSetValue = (inp: number | string) => () => {
    if (value === "0" && !isNumber(inp)) {
      setValue("0");
      return;
    }
    if (!isNumber(inp) && toogle) {
      setValue(value.toString().concat(inp.toString()));
      setToogle(!toogle);
      return;
    }

    if (toogle) {
      setValue(inp.toString());
      setToogle(!toogle);
      return;
    }

    setValue(value.toString().concat(inp.toString()));
  };

  const handleClickEqual = () => () => {
    if (value.toString() === "0") {
      return;
    }

    setValue(evaluate(value));
    setToogle(!toogle);
  };

  const handleClickReset = () => () => {
    setValue("0");
    setToogle(true);
  };

  return {
    value,
    handleClickEqual,
    handleClickReset,
    handleClickSetValue,
    handleONOFF,
  };
}
