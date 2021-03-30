const map = (arr, call) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(call(arr[i]));
  }
  return result;
};
module.exports = {map};