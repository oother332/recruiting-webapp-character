import React from 'react';
import { CLASS_LIST } from '../../consts';
import { isEligibleForClass } from '../../helpers/common';
import './ClassSection.css';

function ClassSection({ attributes, setHighlightedClass, highlightedClass }) {
  return (
    <>
      <div className="section-border">
        {Object.keys(CLASS_LIST).map((c) => (
          <div key={c}>
            <h3
              className={`${isEligibleForClass(
                attributes,
                CLASS_LIST[c]
              )} charClassName`}
              onClick={() => setHighlightedClass(c)}
            >
              {c}
            </h3>
          </div>
        ))}
      </div>
      {highlightedClass && (
        <div className="section-border">
          {Object.entries(CLASS_LIST[highlightedClass]).map((attr) => (
            <div key={attr}>
              <p>
                {attr[0]}: {attr[1]}
              </p>
            </div>
          ))}
          <button onClick={() => setHighlightedClass(null)}>Close</button>
        </div>
      )}
    </>
  );
}

export default ClassSection;
