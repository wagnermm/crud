import DataTable from '../dataTable/DataTable';
import './lista.css';


const Lista = ()=> {
    return(
        <div className="homeContainer">
            <h1>Lista de Clientes</h1>
            <DataTable/>
        </div>
    )
}

export default Lista