import { Component } from "react";
import { Backdrop, ModalContainer } from "./Modal.styled";

class Modal extends Component {
  state = {
    isOpen: false,
    timeInModal: 0,
  };

  startTimer() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeInModal: prevState.timeInModal + 1,
      }));
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  componentDidMount() {
    console.log("Modal mounted");
    if (this.props.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.props.onClose();
      }
    });
  }

  componentDidUpdate(prevProps) {
    console.log("Modal updated", this.props.isOpen);
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }

    if (this.state.isOpen === true) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    console.log("Modal unmounted");
    this.stopTimer();
  }

  render() {
    if (this.state.isOpen === false) {
      return null;
    } else {
      return (
        <Backdrop>
          <ModalContainer>
            <h2>Modal Title</h2>
            <p>This is a simple modal dialog.</p>
            <button onClick={this.props.onClose}>Close</button>
            <p>Time in modal: {this.state.timeInModal}sec</p>
          </ModalContainer>
        </Backdrop>
      );
    }
  }
}

export default Modal;
