//custom type
type CounterProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: (a: number, b: number) => string;
};

//use interface
// interface CounterProps {
//   count: number;
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// }

//
export default function Counter({ count, setCount, total }: CounterProps) {
  console.log(total(33, 44));

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
}
