import { useState } from 'react';

import Button from '../../UI/Button/Button';
import './GoalInput.css';

const GoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsVald] = useState(true);

  const goalInputChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsVald(true);

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsVald(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Make A Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
            background: !isValid && 'salmon',
          }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
