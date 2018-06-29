import browserOnly from "./exceptions/browserCheck"
import is from "./methods/is";
import plural from "./methods/plural";
import detect from "./helpers/detectLang";


browserOnly();
export default {
  detect: () => detect(),
  is: is,
  plural: arr => plural(arr)
};
