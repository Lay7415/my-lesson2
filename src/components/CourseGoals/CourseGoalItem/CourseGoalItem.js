import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  console.log(props)

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
  // когда нажимаем на лист то через подьем состояния в свойство onDelete вставлzется props.id
};

export default CourseGoalItem;
