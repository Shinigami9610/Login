
'use client'
import { useEffect, useState } from 'react';


const TablaUsuarios =({title})=>{

    const [tables, setTables] = useState([]);

    useEffect(() => {
        fetch('/api/tables')
            .then(response => response.json())
            .then(data => setTables(data))
            .catch(error => console.error('Error fetching tables:', error));
    }, []);

  
return(
<div>
<div><a
        name=""
        id=""
        class="btn btn-primary"
        href="#"
        role="button"
        >Agregar</a>
    </div>
<div
    class="table-responsive"
>
    
    <div></div>
    <table
        class="table table-primary"
    >
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr class="">
                <td scope="row">R1C1</td>
                <td>dfgdfgdfg</td>
                <td><a
                    name=""
                    id=""
                    class="btn btn-info"
                    href="#"
                    role="button"
                    >editar</a>
                    <a
                    name=""
                    id=""
                    class="btn btn-danger"
                    href="#"
                    role="button"
                    >editar</a>
                </td>
            </tr>
            <tr class="">
                <td scope="row">Item</td>
                <td>Item</td>
                <td>Item</td>
            </tr>
        </tbody>
    </table>
</div>
</div>



)


}
export default TablaUsuarios