export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
