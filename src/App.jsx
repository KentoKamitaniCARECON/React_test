import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/colorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setShowFlag(!showFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFlag || setShowFlag(true);
      } else {
        showFlag && setShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">hello</ColorfulMessage>
      <ColorfulMessage color="red">hellohello</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>

      <p>{num}</p>
      {showFlag && <p>kkkkk</p>}
    </>
  );
};

export default App;
