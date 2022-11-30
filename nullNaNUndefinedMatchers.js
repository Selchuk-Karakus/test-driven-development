export const getVowels = (str) => {
  const message = str.match(/[aeiou]/gi);
  if (message === null) {
    return null;
  }
  return message.length;
};
