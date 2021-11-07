import React, { useState } from 'react';
//импорт реакта и делаем возможное использование состояния
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
// импорт CourseGoalList
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
// импорт CourseInput
import './App.css';
// импорт App.css

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);
  //создаем состояние с массивом, внутри которого есть обьекты, а в внутри обьекта его свойства

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
//функция которая возвращает массив и возвращает новый массив updatedGoals с id и с новыми добавлениями 

  const deleteItemHandler = goalId => {
    //через подьем состояния приходит goalId
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      console.log(goalId)

      return updatedGoals;
    });
  };
// функция котороя фильтрует массив и возвращает новый массив updatedGoals
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );
  // переменная котороя содержит текст будет выходить если courseGoals меньше или равно нулю

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
// если длинна courseGoals ,больше нуля, то создаем переменную content внутри которого CourseGoalList и добавляем свойства: 1)items - где вставляем courseGoals;2)onDeleteItem - которому даем функцию deleteItemHandler
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
        {/* создаем сдесь CourseInput и создаем свойство onAddGoal внутри которого даем функцию addGoalHandler*/}
      </section>
      <section id="goals">
        {content}
        {/* размещаем content */}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
