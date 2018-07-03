import contains from "../helpers/arrContains";

export default (arg, regions, target) => {
  for (let i = 0; i < arg.length; i++) {
    if (!contains(regions, arg[i])) {
      let regionException = `Invalid region : '${
        arg[i]
      }' in '${target}'.\n* you can use them in [ ${regions} ].`;
      throw regionException;
      break;
    }
  }
};
