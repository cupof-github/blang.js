/* Chinese */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * ca : Canada
 * fr : France
 * ch : Switzerland
 */
const frRegions = ["ca", "fr", "ch"];

export default arg => {
  return callback(arg, detect(), "fr", frRegions);
};
