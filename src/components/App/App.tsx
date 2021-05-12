import React, {useState} from 'react';
import NewIdeaForm from '../NewIdeaForm/NewIdeaForm';


const App: React.FC = () => {
  const [ideas, setIdeas] = useState<Array<any>>([]);

  return (
    <div className="App">
      <NewIdeaForm addIdea={setIdeas} ideas={ideas}/>
    </div>
  );
}

export default App;
