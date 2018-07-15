/* Portuguese */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * br : Brazil
 * pt : Portugal
 */
let ptRegions = ["br", "pt"];

export default arg => callback(arg, detect(), "pt", ptRegions);
