duplicateEncoder = (string) => {
  return string
    .split('')
    .map((letter) => {
      return '(';
    })
    .join('');
};
