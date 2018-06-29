// if language is not used to multiple regions
import detect from "../../helpers/detectLang";

export default (target, flag) => {
  const l = detect(); // detect language
  let lang = flag === true ? l.slice(0, 3) : l.slice(0, 2);

  return lang === target ? true : false;
};
