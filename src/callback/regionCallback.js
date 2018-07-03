// regionCallback.js
import intCheck from "../exceptions/intCheck";
import regionCheck from "../exceptions/regionCheck";
import toLower from "../helpers/arrToLower";
import contains from "../helpers/arrContains";

export default (arg, lang, target, regions) => {
  intCheck(arg); // if arg is Int, then to be Exception

  // if argument exist
  if (arg !== undefined) {
    let local = lang.slice(3, 5);

    // if arg is array
    if (Array.isArray(arg)) {
      // local region '*-us', '*-ca' and so.
      let argument = toLower(arg);

      // check invalid regions in array
      regionCheck(argument, regions, target);

      // comparing language
      if (lang.slice(0, 2) !== target) return false;

      // if browser-lang has setting as 'en-us', 'zh-tw', 'de-de'
      if (local !== "") return contains(argument, local);

      // if lang is plain like, 'en', 'zh', 'de'
      return true;
    } else {
      // if arg is string
      return arg.toLowerCase() === local ? true : false;
    } // ! Array.isArray
  } // if arg !== undefined

  // if arg is empty
  return lang.slice(0, 2) === target ? true : false;
}; // ! export default
