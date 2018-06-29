export default arg => {
  if (arg !== undefined) {
    if (typeof arg === "number") throw "value should not be Integer";
  }
};
