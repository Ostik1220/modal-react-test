import './App.css';
import { Component } from 'react';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  OpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  CloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.OpenModal}>Open Modal</button>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.CloseModal}
        />
      </div>
    );
  }
}

export default App;

