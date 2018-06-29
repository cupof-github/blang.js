import contains from "../helpers/arrContains";

export default (arg, regions, target) => {
  for (let i = 0; i < arg.length; i++) {
    if (!contains(regions, arg[i])) {
      let regionException = `Invalid region : '${target}' regions has not '${
        arg[i]
      }' in defined.\n* you can use them in " ${regions} " .`;
      throw regionException;
      break;
    }
  }
};
