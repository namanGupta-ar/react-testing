import React, { useState } from "react";

const Button = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <p>Button</p>
      <button data-testid="btn-1" onClick={() => setData("updated data")}>
        Update Data
      </button>
      <button data-testid="btn-2" onClick={() => setData("")}>
        Empty Data
      </button>
      <h1 data-testid="btn-val">{data ? data : <strike>Empty</strike>}</h1>
      <p>Naman</p>
    </div>
  );
};

export default Button;
