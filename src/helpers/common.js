export const isEligibleForClass = (attributes, classRequirements) => {
  const isEligible = Object.keys(classRequirements).every((attr, i) => {
    return attributes[i] >= classRequirements[attr];
  });

  return isEligible ? 'eligible' : 'ineligible';
};

export const calculateModifier = (attribute) => {
  return Math.floor((attribute - 10) / 2);
};

export const attributeSum = (attributes) => {
  return attributes.reduce((acc, curr) => acc + curr, 0);
};
