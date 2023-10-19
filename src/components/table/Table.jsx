import { useState } from 'react';
import ModalComp from '../modal/ModalComponent';
import './table.css';

const Table = ()=> {
    const [ openModal, setOpenModal] = useState(false);
    const [ cadastro1, setCadastro1 ] = useState('cadastro');
    const excluirCadastro1 = ()=> {
        cadastro1 === 'cadastro' ? setCadastro1('cadastroExcluido') : setCadastro1('cadastro');
    };
    const [ cadastro2, setCadastro2 ] = useState('cadastro');
    const excluirCadastro2 = ()=> {
        cadastro2 === 'cadastro' ? setCadastro2('cadastroExcluido') : setCadastro2('cadastro');
    };
    const [ cadastro3, setCadastro3 ] = useState('cadastro');
    const excluirCadastro3 = ()=> {
        cadastro3 === 'cadastro' ? setCadastro3('cadastroExcluido') : setCadastro3('cadastro');
    };
    const [ cadastro4, setCadastro4 ] = useState('cadastro');
    const excluirCadastro4 = ()=> {
        cadastro4 === 'cadastro' ? setCadastro4('cadastroExcluido') : setCadastro4('cadastro');
    };
    return(
        <div className='tableContainer'>
            <div className="btnContent">
                <button type='button' className='btnCadastro' onClick={()=> setOpenModal(true)}>Cadastrar</button>
                <ModalComp open={openModal} close={()=> setOpenModal(!openModal)}/>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={cadastro1}>
                        <td className='name'>Wagner Miranda</td>
                        <td className='email'>wagner.miranda@gmail.com</td>
                        <td className='action'>
                            <div className="btnAction">
                                <button type='button' className='btnEditar'>Editar</button>
                                <button type='button' className='btnExcluir' onClick={excluirCadastro1}>Excluir</button>
                            </div>
                        </td>
                    </tr>
                    <tr className={cadastro2}>
                        <td className='nome'>João Silva</td>
                        <td className='email'>joao.silva@gmail.com</td>
                        <td className='action'>
                            <div className="btnAction">
                                <button type='button' className='btnEditar'>Editar</button>
                                <button type='button' className='btnExcluir' onClick={excluirCadastro2}>Excluir</button>
                            </div>
                        </td>
                    </tr>
                    <tr className={cadastro3}>
                        <td className='nome'>Maria Aparecida</td>
                        <td className='email'>maria.aparecida@gmail.com</td>
                        <td className='action'>
                            <div className="btnAction">
                                <button type='button' className='btnEditar'>Editar</button>
                                <button type='button' className='btnExcluir' onClick={excluirCadastro3}>Excluir</button>
                            </div>
                        </td>
                    </tr>
                    <tr className={cadastro4}>
                        <td className='nome'>José Pereira</td>
                        <td className='email'>jose.pereira@gmail.com</td>
                        <td className='action'>
                            <div className="btnAction">
                                <button type='button' className='btnEditar'>Editar</button>
                                <button type='button' className='btnExcluir' onClick={excluirCadastro4}>Excluir</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table