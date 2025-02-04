import { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

const Counter = () => {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem('count')) || 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const bgColor = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${count / 100})`,
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div style={{ ...bgColor, padding: '20px', textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </animated.div>
  );
};

export default Counter;
