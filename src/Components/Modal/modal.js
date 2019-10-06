import React from "react";
import PropTypes from 'prop-types';
import { Image, Modal } from "semantic-ui-react";


const ModalGet = ({ modalOpen, closeModal }) => {

    ModalGet.propTypes={
        modalOpen: PropTypes.bool,
        closeModal: PropTypes.func
     }



return (
    <Modal
    open={modalOpen}
    size="tiny"
    closeIcon={true}
    onClose={() => {
      closeModal(false);
    }}
  >
    <Modal.Header>JavaScript!!!!</Modal.Header>
    <Modal.Content image>
      <Image
        wrapped
        size="big"
        src="https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg"
      />
    </Modal.Content>
  </Modal>
)
}



export default ModalGet;
