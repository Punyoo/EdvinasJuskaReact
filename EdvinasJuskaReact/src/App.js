import "./App.css";
import Button from "./components/atoms/Button/index.js";
import Modal from "./components/organisms/Modal";
import Form from "./components/organisms/Form";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Button
        func={() => {
          setIsOpen(true);
        }}
        text={"CLICK ME"}
        bgColor="red"
      ></Button>

      <Modal
        children={<Form></Form>}
        title={"Modal Title"}
        overlay={0.1}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Modal>
    </div>
  );
}

export default App;
