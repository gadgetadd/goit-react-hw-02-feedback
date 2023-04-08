import { capitalize } from 'utilites/capitalize';

export const FeedbackOptions = ({ options }) => {
  return (
  
      <ul>
        {Object.keys(options).map(key => (
          <li key={key}>
            <button type="button">{capitalize(key)}</button>
          </li>
        ))}
      </ul>
    
  );
};
