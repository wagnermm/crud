import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, useDisclosure, Table, Thead,
  Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "../modal/ModalComponent";
import './clientes.css';

const Clientes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

/* 
  const [cadClientes, setCadClientes] = useState([]);

  fetch("http://localhost:5000/clientes", {
    method:"GET",
    headers: {
      'content-type': 'aplication/json'
    }
  }).then((response)=> response.json())
    .then((data)=> {
      setCadClientes(data)
    })
    .catch((err)=> console.log(err))
*/

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const cadastreRemove = (email) => {
    const newArray = data.filter((item) => item.email !== email);

    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));
  };

  return (
    <Flex className="mainContainer">
      <h1 className="clientesTitle">Cadastro de Clientes</h1>
      <Box className="btnContent">
        <button className="btnCadastro" onClick={() => [setDataEdit({}), onOpen()]}>
          CADASTRAR
        </button>
      </Box>
      <Box className="container">
        <Box overflowY="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th fontSize="20px">
                  Nome
                </Th>
                <Th fontSize="20px">
                  E-Mail
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, email }, index) => (
                <Tr key={index}>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      cursor="pointer"
                      onClick={() => [
                        setDataEdit({ name, email, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      cursor="pointer"
                      onClick={() => cadastreRemove(email)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default Clientes;