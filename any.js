const contains = (array, object) => {
  let i = array.length;

  while (i--) {
    if (array[i] === object) return true;
  }

  return false;
};

const arg = ["us", "aa", "ca"];
const regions = ["au", "ca", "in", "nz", "gb", "us"];

// console.log(contains(regions, arg[2]));

const t = (arg, regions, target) => {
  for (var i = 0; i < arg.length; i++) {
    if (!contains(regions, arg[i])) {
      let regionException = `Invalid region : '${target}' regions has not '${
        arg[i]
      }' in defined.
      you can use them in " ${regions} " .`;
      throw regionException;
      break;
    }
  }
};

t(arg, regions, "en");
