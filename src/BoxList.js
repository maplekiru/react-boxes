import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'

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
    let newBox = {...box, id: uuid() }
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div>
      <NewBoxForm />
      {

      }
    </div>
  )

}