/* English */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * at : Austria
 * de : Germany
 * li : Liechtenstein
 * ch : Switzerland
 */
const deRegions = ["at", "de", "li", "ch"];

export default arg => {
  return callback(arg, detect(), "de", deRegions);
};
