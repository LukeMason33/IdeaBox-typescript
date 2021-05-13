import React, {useState} from 'react';
import NewIdeaForm from '../NewIdeaForm/NewIdeaForm';
import IdeaBoxContainer from '../IdeaBoxContainer/IdeaBoxContainer';


const App: React.FC = () => {
  const [ideas, setIdeas] = useState<any>([]);

  const removeIdea = (ideaToRemove:any) => {
    if (ideas.length === 1) {
      setIdeas([]);
    } else {
      setIdeas(ideas.filter((idea:any) => idea !== ideaToRemove));
    }
  }

  return (
    <div className="App">
      < NewIdeaForm addIdea={setIdeas} ideas={ideas} />
      < IdeaBoxContainer ideas={ideas} deleteIdea={removeIdea}/>
    </div>
  );
}

export default App;
