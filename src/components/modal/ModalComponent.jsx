import { Modal, ModalOverlay, ModalContent, ModalHeader,
ModalBody, ModalFooter, ModalCloseButton, Button, FormControl,
FormLabel, Input, Box } from '@chakra-ui/react';
import './modal.css';

const ModalComp = ({open, close})=> {
    if(!open) return null;
    return(
        <div className='modalContainer'>
            <div className="modalContent">
                <div className="modalHeader">
                    <h2>Novo Cadastro</h2>
                    <div className="closeModal" onClick={close}>X</div>
                </div>
                <div className="modalBody">
                    <form>
                        <label htmlFor="name">Nome</label>
                        <input type="text" className='name' />
                        <label htmlFor="email">E-mail</label>
                        <input type="text" className='email' />
                    </form>
                </div>
                <div className="modalFooter">
                    <button type='button' className='btnSalvar'>Salvar</button>
                    <button type='button' className='btnCancelar'>Cancelar</button>
                </div>
            </div>
        </div>
    )
};

export default ModalComp