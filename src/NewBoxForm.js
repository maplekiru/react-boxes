import React, { useState } from 'react';

/** NewBoxForm
 * 
 *  - Props: addBox
 *  - State: formData{height, width, color}
 *
 * App --> BoxList --> NewBoxForm
 */
function NewBoxForm({ addBox }) {

  const initialState = { height: 0, width: 0, color: "" };
  const [formData, setFormData] = useState(initialState);

  /**
   * Pulls in new data from change in the form
   * Resets formData to include that new info
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /**
   * When form is submitted, creates a new box from the
   * formData and resets form back to original state
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="box-height">Box height:</label>
      <input
        onChange={handleChange}
        id="box-height"
        name="height"
        value={formData.height}></input>
      <label htmlFor="box-width">Box width:</label>
      <input
        onChange={handleChange}
        id="box-width"
        name="width"
        value={formData.width}></input>
      <label htmlFor="box-color">Box color:</label>
      <input
        onChange={handleChange}
        id="box-color"
        name="color"
        value={formData.color}></input>
      <button type="submit">Submit new box!</button>
    </form>
  )

}

export default NewBoxForm;