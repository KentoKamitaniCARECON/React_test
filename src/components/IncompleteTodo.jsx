import React from "react";

export const IncompleteTodo = (props) => {
  const { todo, onClickDelete, onClickComplete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
