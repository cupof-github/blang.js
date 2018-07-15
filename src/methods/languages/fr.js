/* French */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * ca : Canada
 * fr : France
 * ch : Switzerland
 */
let frRegions = ["ca", "fr", "ch"];

export default arg => {
  return callback(arg, detect(), "fr", frRegions);
};
