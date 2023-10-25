import React from "react";
import { useState, useEffect } from "react";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
    
const DataTable = ()=> {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/clientes')
          .then((response) => response.json())
          .then((data) => {
            setClientes(data);
          })
          .catch((err) => console.log(err));
      }, []);

    return(
        <div>
            <Table>
                <Thead>
                    <Tr>
                        <Th fontSize="20px">
                            Nome
                        </Th>
                        <Th fontSize="20px">
                            E-mail
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                {clientes.map((cliente) => (
                    <Tr key={cliente.id}>
                    <Td>{cliente.name}</Td>
                    <Td>{cliente.email}</Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </div>
    )
}
export default DataTable