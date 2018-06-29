/* Portuguese */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * br : Brazil
 * pt : Portugal
 */
const enRegions = ["br", "pt", "in", "nz", "gb", "us"];

export default arg => callback(arg, detect(), "pt", enRegions);
