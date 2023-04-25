import { useEffect, useState } from 'react';
import './App.css';
import { SKILL_LIST } from './consts.js';
import AttributesSection from './components/AttributesSection';
import ClassSection from './components/ClassSection';
import SkillsSection from './components/SkillsSection';
import { createCharacter, getCharacter } from './services/charactersheet';
import { attributeSum } from './helpers/common';
import SkillCheckSection from './components/SkillCheckSection';

function App() {
  const [attributes, setAttributes] = useState([10, 10, 10, 10, 10, 10]);
  const [highlightedClass, setHighlightedClass] = useState(null);
  const [skills, setSkills] = useState(
    SKILL_LIST.map((skill) => ({ ...skill, points: 0 }))
  );

  const handleIncrementAttribute = (index) => {
    if (attributeSum(attributes) < 70) {
      setAttributes([
        ...attributes.slice(0, index),
        attributes[index] + 1,
        ...attributes.slice(index + 1),
      ]);
    }
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

  useEffect(() => {
    const callGetCharacter = async () => {
      const character = await getCharacter();
      if (character.attributes && character.skills) {
        setAttributes(character.attributes);
        setSkills(character.skills);
      }
    };
    callGetCharacter();
  }, []);

  const createCharacterWrapper = () => {
    const character = {
      attributes,
      skills,
    };
    createCharacter(character);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DND Sheet</h1>
        <button onClick={createCharacterWrapper}>Save Character</button>
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
        <SkillCheckSection skills={skills} attributes={attributes} />
      </section>
    </div>
  );
}

export default App;
