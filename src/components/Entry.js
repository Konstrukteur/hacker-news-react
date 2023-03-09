const Entry = ({ entry, setIsLoading }) => {
  return (
    <article className='result-entry' key={entry.title}>
      <div className='entry-container'>
        <div className='entry-data'>
          <div className='entry-title'>
            <a href={entry.url}>
              <span>{entry.title}</span>
            </a>
            <p>
              <a href={entry.url} className='entry-link'>
                <span>({entry.url})</span>
              </a>
            </p>
          </div>
          <div className='entry-meta'>
            <span>{entry.points}</span>
            <span className='entry-separator'>|</span>
            <span>{entry.author}</span>
            <span className='entry-separator'>|</span>
            <span>
              <a href={entry.url}>17 days ago</a>
            </span>
            <span className='entry-separator'>|</span>
            <span>
              <a href={entry.url}>0 comments</a>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Entry;
