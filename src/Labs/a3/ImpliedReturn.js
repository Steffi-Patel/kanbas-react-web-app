const multiply = (a, b) => a * b;

function ImpliedReturn() {
  const fourTimesFive = multiply(4, 5);

  return (
    <>
      <h3>Implied Return</h3>
      fourTimesFive = {fourTimesFive}
    </>
  );
}
export default ImpliedReturn;