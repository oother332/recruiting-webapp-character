export const isEligibleForClass = (attributes, classRequirements) => {
  const isEligible = Object.keys(classRequirements).every((attr, i) => {
    return attributes[i] >= classRequirements[attr];
  });

  return isEligible ? 'eligible' : 'ineligible';
};
