
function findSubArray(arr, subArr) {
  const res = [];
  arr.forEach((arrObj) => {
    if (subArr.indexOf(arrObj.label) !== -1) {
      res.push(arrObj);
    }
  });
  return res;
}

export default { findSubArray };
