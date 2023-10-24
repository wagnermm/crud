import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
    ModalCloseButton, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import './modal.css';

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
const [name, setName] = useState(dataEdit.name || "");
const [email, setEmail] = useState(dataEdit.email || "");
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

const cadastreSave = () => {
    if (!name || !email) return;
    
    if (emailAlreadyExists()) {
        return alert("E-mail já cadastrado!");
    }

    if (!emailRegex.test(email)) {
        return alert("E-mail incorreto")
    }
    
    if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { name, email };
    }
    
    const newDataArray = !Object.keys(dataEdit).length
    ? [...(data ? data : []), { name, email }]
    : [...(data ? data : [])];
    
    localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
    
    setData(newDataArray);
    
    onClose();
};

const emailAlreadyExists = () => {
    if (dataEdit.email !== email && data?.length) {
        return data.find((item) => item.email === email);
    }
    
    return false;
};

return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Novo Cliente</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl display="flex" flexDir="column" gap={4}>
                    <Box>
                        <FormLabel>Nome</FormLabel>
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} maxLength={50}/>
                    </Box>
                    <Box>
                        <FormLabel>E-mail</FormLabel>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={50}/>
                    </Box>
                </FormControl>
            </ModalBody>
            <ModalFooter justifyContent="start" gap="2rem">
                <button className="btnSalvar" onClick={cadastreSave}>SALVAR</button>
                <button className="btnCancelar" onClick={onClose}>CANCELAR</button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    </>
    );
};

export default ModalComp;