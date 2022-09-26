import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  function onChangeSubmit(e) {
    let key = e.target.id
    setFormData({
      ...formData,
      [key]:e.target.value
    })
  }

  function itemSubmit(e) {
    e.preventDefault()
    props.onItemFormSubmit(formData)
  }

  return (
    <form className="NewItem" onSubmit={itemSubmit}>
      <label>
        Name:
        <input type="text" id="name" name="name" placeholder={formData.name} onChange={onChangeSubmit}/>
      </label>

      <label>
        Category:
        <select id="category" value={formData.category} name="category" onChange={onChangeSubmit}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
