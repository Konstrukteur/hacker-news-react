const Entry = ({ entry, setIsLoading }) => {
  return (
    <div className='result-entry' key={entry.index}>
      <div className='entry-title'>
        {setIsLoading(false)}
        {entry.title}
      </div>
      <div className='entry-link'>
        <div className='entry-points'>{entry.points}</div>
        <div className='entry-author'>{entry.author}</div>
        <a href={entry.url} target='_blank'>
          {entry.url}
        </a>
      </div>
    </div>
  );
};

export default Entry;
