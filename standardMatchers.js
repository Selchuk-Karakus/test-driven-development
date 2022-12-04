export const compares = (firstNum, secondNum) => {
  return firstNum === secondNum ? firstNum : 0;
};

export const country1 = {
  name: "Turkiye",
  population: 90000000
}

export const country2 = {
  name: "Turkiye",
  population: 90000000,
};

export const welcomeTo = (country) => {
  return `Welcome to ${country}`
}

export const carOnSale = {
  make: "Mazda",
  model: "CX30",
  fuelType: "hybrid",
  colour: "red"
}

export const carDesired = {
  make: "Mazda",
  model: "CX30"
}

export const isTruthy = (value) => {
  if(value) {
    return true
  } else {
    return false
  }
}


