import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import { isEligibleForClass } from './helpers/common';

function App() {
  const [attributes, setAttributes] = useState([10, 10, 10, 10, 10, 10]);
  const [highlightedClass, setHighlightedClass] = useState('Barbarian');

  const handleIncrementAttribute = (index) => {
    setAttributes([
      ...attributes.slice(0, index),
      attributes[index] + 1,
      ...attributes.slice(index + 1),
    ]);
  };

  const handleDecrementAttribute = (index) => {
    setAttributes([
      ...attributes.slice(0, index),
      attributes[index] - 1,
      ...attributes.slice(index + 1),
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DND Sheet</h1>
      </header>
      <section className="App-section">
        <div className="section-border">
          <h2>Attributes</h2>
          {ATTRIBUTE_LIST.map((attribute, i) => (
            <div key={attribute}>
              <label htmlFor={attribute}>{attribute}</label>
              <input value={attributes[i]} readOnly />
              <button onClick={() => handleIncrementAttribute(i)}>+</button>
              <button onClick={() => handleDecrementAttribute(i)}>-</button>
            </div>
          ))}
        </div>
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
      </section>
    </div>
  );
}

export default App;
