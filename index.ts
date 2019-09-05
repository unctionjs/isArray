import isType from "@unction/istype";

export default function isArray<A> (value: A): boolean {
  return isType("Array")(value);
}
