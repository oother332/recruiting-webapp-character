import React, { useState } from 'react';
import { ATTRIBUTE_LIST } from '../../consts';
import { calculateModifier } from '../../helpers/common';

function SkillCheckSection({ skills, attributes }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [DC, setDC] = useState(15);
  const [roll, setRoll] = useState(null);

  const modifier = calculateModifier(
    attributes[ATTRIBUTE_LIST.indexOf(skills[selectedIndex]?.attributeModifier)]
  );

  const handleChangeSelection = (e) => {
    setSelectedIndex(e.target.value);
  };

  const handleOnClickRoll = () => {
    setRoll(Math.floor(Math.random() * (20 - 1 + 1)) + 1 + modifier);
  };

  return (
    <div className="section-border">
      <h2>Skill Check</h2>
      <div>
        <select value={selectedIndex} onChange={handleChangeSelection}>
          {skills.map((skill, i) => (
            <option key={skill.name} value={i}>
              {skill.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={DC}>DC</label>
        <input
          value={DC}
          type="number"
          onChange={(e) => setDC(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={roll}>Roll</label>
        <p>{roll}</p>
        {roll && roll >= DC ? <p>Success!</p> : <p>Failure!</p>}
        <button onClick={handleOnClickRoll}>Roll</button>
      </div>
    </div>
  );
}

export default SkillCheckSection;
