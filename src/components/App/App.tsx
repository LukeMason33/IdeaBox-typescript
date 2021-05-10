import React, {useState} from 'react';
import NewIdeaForm from '../NewIdeaForm/NewIdeaForm';


const App = () => {
  const [ideas, setIdeas] = useState([]);

  return (
    <div className="App">
      <NewIdeaForm/>
    </div>
  );
}

export default App;
