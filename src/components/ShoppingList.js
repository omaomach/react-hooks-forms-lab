import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) => {
    let result = item.name.includes(search)
    return result
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = filteredItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function searchItem(newSearch) {
    setSearch(newSearch)
  }

  function itemFormSubmit(newItem) {

    const updateItems = [...itemsToDisplay, newItem]
    console.log(newItem)
    setItems(updateItems)

  }



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={itemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={searchItem} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
