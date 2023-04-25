import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import { calculateModifier, isEligibleForClass } from './helpers/common';
import AttributesSection from './components/AttributesSection/AttributesSection';
import ClassSection from './components/ClassSection/ClassSection';
import SkillsSection from './components/SkillsSection/SkillsSection';

function App() {
  const [attributes, setAttributes] = useState([10, 10, 10, 10, 10, 10]);
  const [highlightedClass, setHighlightedClass] = useState(null);
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
        <AttributesSection
          attributes={attributes}
          handleIncrementAttribute={handleIncrementAttribute}
          handleDecrementAttribute={handleDecrementAttribute}
        />
        <ClassSection
          attributes={attributes}
          highlightedClass={highlightedClass}
          setHighlightedClass={setHighlightedClass}
        />
        <SkillsSection
          attributes={attributes}
          skills={skills}
          handleIncrementSkill={handleIncrementSkill}
          handleDecrementSkill={handleDecrementSkill}
        />
      </section>
    </div>
  );
}

export default App;
