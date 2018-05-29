import isType from "@unction/istype";
export default function isArray(value) {
  return isType("Array")(value);
}
