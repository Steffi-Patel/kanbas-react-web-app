import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
  functionScoped,
  blockScoped,
  constant1,
  ...numberArray1,
  ...stringArray1,
];

function WorkingWithArrays() {
  console.log("Working with Arrays");
  console.log("numberArray1 =", numberArray1.join(""));
  console.log("stringArray1 =", stringArray1.join(""));
  console.log("variableArray1 =", variableArray1.join(""));

  return (
    <div>
        <ArrayIndexAndLength/>
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        <JsonStringify/>
        <FindFunction/>
        <FilterFunction/>

    </div>
  );
}

export default WorkingWithArrays;
