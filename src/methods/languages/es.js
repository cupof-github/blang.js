/* English */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * ar : Argentina
 * cl : Chile
 * co : Colombia
 * cr : Costa Rica
 * hn : Honduras
 * 419 : Latin America
 * mx : Mexico
 * pe : Peru
 * es : Spain
 * us : United States
 * uy : Uruguay
 * ve : Venezuela
 */
const esRegions = [
  "ar",
  "cl",
  "co",
  "cr",
  "hn",
  "419",
  "mx",
  "pe",
  "es",
  "us",
  "uy",
  "ve"
];

export default arg => {
  return callback(arg, detect(), "es", esRegions);
};
