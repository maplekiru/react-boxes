import './App.css';
import BoxList from './BoxList';

/** App
 * 
 * Props: none
 * State: none
 * 
 * 
 * App ---> BoxList
 */
function App() {
  return (
    <div>
      <BoxList/>
    </div>
  );
}

export default App;


/**
 * BoxList 
 * Props: None
 * State:
 *  - Keeps track of each box {height, width, color}
 * 
 * 
 * Box
 * Props: 
 *  - height, width, color, removeBoxFn
 * State: None
 * 
 * 
 * NewBoxForm:
 *  - Props: addBox (comes from BoxList [SetBox])
 *  - State: .formData{height, width, color} (Use computed properties)
 */