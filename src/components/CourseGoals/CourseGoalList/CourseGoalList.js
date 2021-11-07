import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';
//импортируем  React, CourseGoalItem, и CourseGoalList.css

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        // перебивает из пропса айтемы и элементы goal вставляет в свойства компоненты CourseGoalItem
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
