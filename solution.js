function calculateBMI(name, weight, height) {
  return `${name} has a BMI of ${(weight / height ** 2).toFixed(2)}`;
}

console.log(calculateBMI("john", 71, 1.64));

function whiIsBiggest(name1, name2, weight1, weight2, height1, height2) {
  const BMI1 = weight1 / height1 ** 2;
  const BMI2 = weight2 / height2 ** 2;

  if (BMI1 > BMI2) {
    return name1;
  } else {
    return name2;
  }

  return BMI1;
}
