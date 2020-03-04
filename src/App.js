import React, { useState } from 'react';
import Modal from 'react-modal'
import './App.css';

Modal.setAppElement("#root")
function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setmodalIsOpen(true)}>Open Modal</button>
     <Modal isOpen={modalIsOpen} 
     shouldCloseOnOverlayClick={false} 
     shouldCloseOnEsc={false} 
     onRequestClose={() => setmodalIsOpen(false)}
     style={
       {
         overlay: {
           backgroundColor: 'grey'
         },
         content: {
           color: 'orange'
         }
       }
       }>
       <h2>Demo-Modal-Title</h2>
       <p>Modal-Body</p>
       <div>
         <button onClick={() => setmodalIsOpen(false)}>Close</button>
       </div>
     </Modal>
    </div>
  );
}

export default App;
