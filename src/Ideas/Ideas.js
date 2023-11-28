import './Ideas.css';
import Card from '../Card/Card.js';

function Ideas({ ideas }) {
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.key}
      />
    );
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  );
}

export default Ideas;