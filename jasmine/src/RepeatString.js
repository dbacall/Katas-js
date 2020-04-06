repeatString = (str, num) => {
  if (num < 1) {
    return "";
  } else return Array(num).fill(str).join("");
};
