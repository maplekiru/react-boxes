import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

/** BoxList 
 * Props: None
 * State:
 *  - Keeps track of each box {height, width, color}
 * 
 * App --> BoxList --> Box, NewBoxForm
 */
function BoxList() {

  // track state of boxes
  const [boxes, setBoxes] = useState([]);

  /**
   * Accepts a boxID and removes that box from boxes
   */
  function removeBox(boxId) {
    setBoxes(boxes => [...boxes].filter(b => b.id !== boxId));
  }

  /** 
   * Accepts a object box: {height, width, color}
   * Adds box to boxes with unique id
   */
  function addBox(box) {
    let newBox = { ...box, id: uuid() } //be consistent about variable decs, use const
    setBoxes(boxes => [...boxes, newBox]);
  }

  //could put our map below on 39 into a variable to evaluate, it's a lil cleaner

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(box =>
        <Box 
          height={box.height} 
          width={box.width} 
          color={box.color} 
          id={box.id}
          key={box.id}
          removeBox= {removeBox}/>
      )}
    </div>
  )

}

export default BoxList;