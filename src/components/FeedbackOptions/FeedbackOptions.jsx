import { capitalize } from 'utilites/capitalize';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {capitalize(option)}
          </button>
        </li>
      ))}
    </ul>
  );
};
