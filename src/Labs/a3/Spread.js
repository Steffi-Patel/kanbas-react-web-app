
function Spread() {
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5, 6];
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
  const obj3 = { ...obj1, b: 4 };

  return (
    <div>
      <h2>Spread Operator</h2>
      <h3>Array Spread</h3>
      <p>arr1 = {JSON.stringify(arr1)}</p>
      <p>arr2 = {JSON.stringify(arr2)}</p>
      <h3>Object Spread</h3>
      <p>{JSON.stringify(obj1)}</p>
      <p>{JSON.stringify(obj2)}</p>
      <p>{JSON.stringify(obj3)}</p>
    </div>
  );
}

export default Spread;
