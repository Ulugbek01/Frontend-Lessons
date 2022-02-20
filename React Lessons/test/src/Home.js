import React, { memo, useState } from "react";

export const Home = () => {
  console.log("Home component");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default memo(Home);
// componentni memoga o'rab qo'ysak
// qayta qayta render bo'lishning oldi olinadi
//memo faqat componentga prop berilmaganda yoki prop berilsa
//ham u string bo'lsa ishlatilinadi.
