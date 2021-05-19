import React from 'react';

const HelloCounter: React.FC = () => {
  // コンポーネントに状態を持たせる
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default function Index() {
  return (
    <div>
      <HelloCounter />
    </div>
  );
}