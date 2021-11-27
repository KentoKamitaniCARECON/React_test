import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  const style = {
    backgroundColor: "#c1fffc",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <input
        placeholder="TODO"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
