truncateString = (str, num) => {
  if (num < str.length) {
    return str.slice(0, num) + "...";
  } else return str;
};
