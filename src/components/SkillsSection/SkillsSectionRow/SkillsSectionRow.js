import React from 'react';

function SkillsSectionRow({
  skill,
  index,
  handleIncrementSkill,
  handleDecrementSkill,
  modifier,
}) {
  return (
    <div key={skill.name}>
      <p className="inline">
        {skill.name} points: {skill.points}
      </p>
      <button onClick={() => handleIncrementSkill(index)}>+</button>
      <button onClick={() => handleDecrementSkill(index)}>-</button>
      <p className="inline">modifier: {modifier}</p>
      <p className="inline"> total: {skill.points + modifier}</p>
    </div>
  );
}

export default SkillsSectionRow;
