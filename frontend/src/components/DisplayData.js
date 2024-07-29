import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/publicaciones')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>tipo</th>
                    <th>nombre</th>
                    <th>autor</th>
                    <th>rol</th>
                    <th>descripcion</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.tipo}</td>
                        <td>{item.nombre}</td>
                        <td>{item.autor}</td>
                        <td>{item.rol}</td>
                        <td>{item.descripcion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DisplayData;

