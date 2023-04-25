import React from 'react';
import { ATTRIBUTE_LIST } from '../../consts';
import { calculateModifier } from '../../helpers/common';
import SkillsSectionRow from './SkillsSectionRow';

function SkillsSection({
  skills,
  handleIncrementSkill,
  handleDecrementSkill,
  attributes,
}) {
  return (
    <div className="section-border">
      <h2>Skills</h2>
      {skills.map((skill, i) => (
        <SkillsSectionRow
          key={skill.name}
          skill={skill}
          index={i}
          handleIncrementSkill={handleIncrementSkill}
          handleDecrementSkill={handleDecrementSkill}
          modifier={calculateModifier(
            attributes[ATTRIBUTE_LIST.indexOf(skill.attributeModifier)]
          )}
        />
      ))}
    </div>
  );
}

export default SkillsSection;
