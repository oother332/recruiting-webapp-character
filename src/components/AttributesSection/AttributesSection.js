import React from 'react';
import { ATTRIBUTE_LIST } from '../../consts';
import { calculateModifier } from '../../helpers/common';

function AttributesSection({
  attributes,
  handleIncrementAttribute,
  handleDecrementAttribute,
}) {
  return (
    <div className="section-border">
      <h2>Attributes</h2>
      {ATTRIBUTE_LIST.map((attribute, i) => (
        <div key={attribute}>
          <label htmlFor={attribute}>
            {attribute}: {calculateModifier(attributes[i])}
          </label>
          <input value={attributes[i]} readOnly />
          <button onClick={() => handleIncrementAttribute(i)}>+</button>
          <button onClick={() => handleDecrementAttribute(i)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default AttributesSection;
