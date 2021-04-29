import { useState } from 'react';

import GoalList from './components/Goals/GoalList/GoalList';
import GoalInput from './components/Goals/GoalInput/GoalInput';
import './App.css';

const App = () => {
  const [goals, setGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (enteredText) => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (goals.length > 0) {
    content = (
      <GoalList items={goals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {goals.length > 0 && (
          <GoalList
            items={goals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
