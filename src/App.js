import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './index.scss';

const Modal = ({ open, setOpen, children }) => (
  <div className={`overlay animated${open ? ' show' : ''}`}>
    <div className="modal">
      <CloseIcon onClick={() => setOpen(false)} className="modal-close">Close modal</CloseIcon>
      {children}
    </div>
  </div>
);

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="modal-open-btn">Open modal</button>
      <Modal open={open} setOpen={setOpen}>
        <h3>Modal Window</h3>
        <img className="modal-img" src="https://images.unsplash.com/photo-1482398650355-d4c6462afa0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="discover"></img>
      </Modal>
    </div>
  );
}

export default App;
