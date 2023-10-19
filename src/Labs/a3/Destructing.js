
function Destructing() {
  const person = { name: "John", age: 25 };
  const { name, age } = person;
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;

  return (
    <div>
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      <p>const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;</p>
      <p>name = {name}</p>
      <p>age = {age}</p>
      <h3>Array Destructing</h3>
      <p>const [first, second, third] = ["one", "two", "three"]</p>
      <p>first = {first}</p>
      <p>second = {second}</p>
      <p>third = {third}</p>
    </div>
  );
}

export default Destructing;
