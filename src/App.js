import "./styles.css";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
import CheckOutsideClick from "./CheckOutsideClick";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <h1>Outside Click to close Modal</h1>
      <button onClick={handleClickOpen}>Click to Open</button>
      <CheckOutsideClick onOutsideClick={handleClose}>
        <ModalComponent open={open} handleClose={handleClose} />
      </CheckOutsideClick>
    </div>
  );
}
