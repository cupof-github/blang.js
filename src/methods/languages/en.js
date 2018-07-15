/* English */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * au : Australia
 * ca : Canada
 * in : India
 * nz : New Zealand
 * za : South Africa
 * gb : United Kingdom
 * us : United States
 */
let enRegions = ["au", "ca", "in", "nz", "gb", "us"];

export default arg => callback(arg, detect(), "en", enRegions);
