export const Statistics = p => {
  return (
    <ul>
      <li>
        <p>Good:{p.good}</p>
      </li>
      <li>
        <p>Neutral:{p.neutral}</p>
      </li>
      <li>
        <p>Bad: {p.bad}</p>
      </li>
      <li>
        <p>Total: {p.total}</p>
      </li>
      <li>
        <p>Positive feedback: {p.positivePercentage}%</p>
      </li>
    </ul>
  );
};
