import React, { useState } from 'react';
import HWTitle from '../../UI/btnForHW/HWTitle';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
//импортируем React,HWTitle,Button,styles

// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red': '#ccc')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red': '#ccc')};
//   background: ${props => (props.invalid ? 'rgb(235, 205, 205)': 'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `;

const CourseInput = props => {
  //создаем состояние внутри которого по умолчанию строка [enteredValue, setEnteredValue] и состояние внутри которого по умолчание true [isValid, setIsValid]
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  // функция в котором если значение инпута больше нуля, то setIsValid = true

  const formSubmitHandler = event => {
    event.preventDefault();
    //чтобы не перезагружался
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    // функция  в котором если enteredValue, т.е. занчение инпута === 0 то setIsValid = false

  };
  return (
    // создаем форму
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      {/* <FormControl className={!isValid && 'invalid'}> */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          // создаем свойства
          // в свойстве onChange пишем функцию goalInputChangeHandler
        />
      </div>
      {/* вызываем компоненты Button и HWTitle*/}
      <Button type="submit">Add Goal</Button>
      <HWTitle>hello!</HWTitle>
    </form>
  );
};

export default CourseInput;
