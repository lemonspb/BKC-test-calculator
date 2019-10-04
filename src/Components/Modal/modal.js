import React from 'react'
import { Image, Modal } from 'semantic-ui-react'

const ModalGet = ({modalOpen,closeModal}) => (
  <Modal open={modalOpen}
  size="tiny"
  closeIcon={true}
  onClose={() => {
    closeModal(false)}}>
    <Modal.Header>JavaScript!!!!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='big' src='https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg' />
    
    </Modal.Content>
  </Modal>
)

export default ModalGet