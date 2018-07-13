export default () => {
  return navigator.userLanguage !== "undefined"
    ? navigator.userLanguage.toLowerCase()
    : navigator.language.toLowerCase();
};
