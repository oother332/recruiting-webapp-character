import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import { calculateModifier, isEligibleForClass } from './helpers/common';

function App() {
  const [attributes, setAttributes] = useState([10, 10, 10, 10, 10, 10]);
  const [highlightedClass, setHighlightedClass] = useState('Barbarian');
  const [skills, setSkills] = useState(
    SKILL_LIST.map((skill) => ({ ...skill, points: 0 }))
  );

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
  const handleIncrementSkill = (index) => {
    setSkills([
      ...skills.slice(0, index),
      { ...skills[index], points: skills[index].points + 1 },
      ...skills.slice(index + 1),
    ]);
  };

  const handleDecrementSkill = (index) => {
    setSkills([
      ...skills.slice(0, index),
      { ...skills[index], points: skills[index].points - 1 },
      ...skills.slice(index + 1),
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
              <label htmlFor={attribute}>
                {attribute}: {calculateModifier(attributes[i])}
              </label>
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
        <div className="section-border">
          <h2>Skills</h2>
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <p className="inline">
                {skill.name} points: {skill.points}
              </p>
              <button onClick={() => handleIncrementSkill(i)}>+</button>
              <button onClick={() => handleDecrementSkill(i)}>-</button>
              <p className="inline">
                modifier:{' '}
                {calculateModifier(
                  attributes[ATTRIBUTE_LIST.indexOf(skill.attributeModifier)]
                )}
              </p>
              <p className="inline">
                {' '}
                total:{' '}
                {skill.points +
                  calculateModifier(
                    attributes[ATTRIBUTE_LIST.indexOf(skill.attributeModifier)]
                  )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
