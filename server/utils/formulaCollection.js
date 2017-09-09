function analysingFormula(r1, r2, r3) {
  const returnObj = { error: false, value: 0 };
  if (!isNaN(r1) || !isNaN(r2) || !isNaN(r3)) {
    returnObj.error = false;
    returnObj.value = 0;
  }
  returnObj.value = (((((r1 + r2 + r3) / 3) - 4, 88467777777778) / 1.48901666666667) * 2) + 5.5;
  return returnObj;
}

function exporingFormula(o1, o2, o3, o4) {
  const returnObj = { error: false, value: 0 };
  if (!isNaN(o1) || !isNaN(o2) || !isNaN(o3) || !isNaN(o4)) {
    returnObj.error = false;
    returnObj.value = 0;
  }
  returnObj.value = (((((o1 + o2 + o3 + o4) / 4) - 5.14834444444444) / 1.26436333333333) * 2) + 5.5;
  return returnObj;
}

function networkingFormula(e3, e4) {
  const returnObj = { error: false, value: 0 };
  if (!isNaN(e3) || !isNaN(e4)) {
    returnObj.error = false;
    returnObj.value = 0;
  }
  returnObj.value = (((((e3 + e4) / 2) - 4.81988888888889) / 1.52691) * 2) + 5.5;

  return returnObj;
}

function collaboratingFormula(a1, a2, a3, a4) {
  const returnObj = { error: false, value: 0 };
  if (!isNaN(a1) || !isNaN(a2) || !isNaN(a3) || !isNaN(a4)) {
    returnObj.error = false;
    returnObj.value = 0;
  }
  returnObj.value = (((((a1 + a2 + a3 + a4) / 4) - 4.98928888888889) / 1.19207666666667) * 2) + 5.5;

  return returnObj;
}

function qualityFormula(c1, c2) {
  const returnObj = { error: false, value: 0 };
  if (!isNaN(c1) || !isNaN(c2)) {
    returnObj.error = false;
    returnObj.value = 0;
  }
  returnObj.value = (((((c1 + c2) / 2) - 4.88467777777778) / 1.48901666666667) * 2) + 5.5;

  return returnObj;
}

function resultDrivenFormula(c3, c4, c5) {
  const returnObj = { error: false, value: 0 };
  if (!isNaN(c3) || !isNaN(c4) || !isNaN(c5)) {
    returnObj.error = false;
    returnObj.value = 0;
  }
  returnObj.value = (((((c3 + c4 + c5) / 3) - 5, 1891) / 1.25301555555556) * 2) + 5.5;

  return returnObj;
}

export default {
  analysingFormula,
  exporingFormula,
  networkingFormula,
  collaboratingFormula,
  qualityFormula,
  resultDrivenFormula,
};
