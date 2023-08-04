import React from "react";
import Button from "./Button";
const Header = ({onAdd}) => {
  return (
    <header className="header">
      <h1>ToDo</h1>
      <Button color="green" 
      onAdd = {onAdd}
      text="Darah" />
    </header>
  );
};

export default Header;