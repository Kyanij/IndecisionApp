import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
     <Modal
       isOpen={props.selectedOption}
      onRequestClose = {props.clearSelectedOption}
       contentLabel="Selected option"
       closeTimeOutMS={200}
       className="modal"
     >
     <h2 className="modal__title">Selected Option</h2>
     {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
     <button className="button" onClick={props.clearSelectedOption}>Okay</button>
     </Modal>
);

export default OptionModal;