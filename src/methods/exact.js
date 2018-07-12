import arrCheck from "../exceptions/arrayCheck";

import contains from "../helpers/arrContains";
import toLower from "../helpers/arrToLower";
import detect from "../helpers/detectLang";

export default arr => {
  arrCheck(arr);
  return contains(toLower(arr), detect());
};
