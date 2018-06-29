export default (array, object) => {
  let i = array.length;

  while (i--) {
    if (array[i] === object) return true;
  }

  return false;
};
