const Entry = ({ entry, setIsLoading }) => {
  return (
    <article className='Story' key={entry.title}>
      <div className='Story_container'>
        <div className='Story_data'>
          <div className='Story_title'>
            <a href={entry.url}>
              <span>{entry.title}</span>
            </a>
          </div>
          <div className='Story_meta'>
            <span>{entry.points}</span>
            <span className='Story_separator'>|</span>
            <span>{entry.author}</span>
            <span className='Story_separator'>|</span>
            <span>
              <a href={entry.url}>17 days ago</a>
            </span>
            <span className='Story_separator'>|</span>
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
