import React from 'react';

/** Box
 * 
 * Props: height, width, color, id, removeBox function from BoxList
 * State: none
 *
 * App --> BoxList --> Box
 */

function Box({ height, width, color, id, removeBox }) {

  /**
   * Removes the box when its button is clicked
   */
  function handleRemove(evt) {
    removeBox(id);
  }

  //could move style object starting on 25 into a variable and then
  //evaluate the variable. also don't need the id value in there

  return (
    <div>
      <div className="box"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: color
        }}
        id={id}
      >
        <button onClick={handleRemove}>
          X
        </button>

      </div>
    </div>
  )

}

export default Box;