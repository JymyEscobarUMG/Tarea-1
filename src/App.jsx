import { Link } from 'react-router-dom';
import './css.css'; 

const ResumenDeCursos = () => {
    return (
        <div>
            <header style={{ backgroundColor: "#f4f4f4", padding: "10px", textAlign: "center" }}>
                <img
                    src="https://i.ibb.co/jM7Nh7s/Captura-de-Pantalla-2024-07-23-a-la-s-11-33-40.png"
                    alt="Banner"
                    width="1420"
                    height="300"
                />
            </header>

            <main>
                <center>
                    <p>
                        Este sitio web esta dedicado a proporcionar informacion detallada sobre los cursos finalizados de nuestra carrera. A continuacion, se presenta un listado de los cursos disponibles:
                    </p>
                </center>

                <table align="center" border="1" cellPadding="10" cellSpacing="0" width="50%">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "left" }}>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to="/programacion">Programacion</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/calculo">Calculo</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/basededatos">Bases de Datos</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/redes">Redes de Computadoras</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/sistemasoperativo">Sistemas Operativos</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>

            <footer style={{ backgroundColor: "#f4f4f4", padding: "10px", textAlign: "center" }}>
                <img
                    src="https://i.ibb.co/1qLxzJk/Captura-de-Pantalla-2024-07-23-a-la-s-12-12-41.png"
                    alt="Footer"
                    width="1420"
                    height="197"
                />
            </footer>
        </div>
    );
};

export default ResumenDeCursos;
