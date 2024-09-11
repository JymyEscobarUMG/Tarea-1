import { Container, Table, ListGroup, Card, Accordion } from 'react-bootstrap';
import './css.css';
import { BotonRegresar } from './botonRegresar';

const EtapasCurso = () => (
    <Card>
        <Card.Header>Etapas del Curso</Card.Header>
        <Card.Body>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Etapa</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BASE DE DATOS I</td>
                        <td>
                            Esta primera etapa del curso se centra en introducir a los estudiantes a los conceptos
                            fundamentales de bases de datos. Se cubren temas esenciales como el diseno y creacion de
                            diagramas de entidad-relacion, los principios basicos del modelado de datos, y las operaciones
                            basicas de consulta en SQL. Los estudiantes aprenderan a formular consultas para recuperar,
                            insertar, actualizar y eliminar datos en una base de datos relacional. El curso tambien abordara
                            las mejores practicas para la organizacion y estructuracion de datos, preparando a los
                            estudiantes para enfrentar problemas comunes en la gestion de bases de datos.
                        </td>
                    </tr>
                    <tr>
                        <td>BASE DE DATOS II</td>
                        <td>
                            En la segunda etapa del curso, los estudiantes profundizan en temas avanzados de bases de datos,
                            como la migracion de datos utilizando herramientas como SQL Server Integration Services (SSIS).
                            Se exploran tecnicas complejas de transformacion de datos, integracion de fuentes de datos
                            heterogeneas, y estrategias para asegurar la calidad e integridad de los datos durante las
                            migraciones. Ademas, se estudian aspectos criticos de la optimizacion del rendimiento de bases
                            de datos, la implementacion de transacciones, y el manejo de la concurrencia, proporcionando a
                            los estudiantes las habilidades necesarias para gestionar bases de datos a gran escala en
                            entornos empresariales.
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card.Body>
    </Card>
);

const PuntosClave = () => (
    <Card>
        <Card.Header>Puntos Clave del Curso</Card.Header>
        <Card.Body>
            <ListGroup>
                <ListGroup.Item>Adquisicion de habilidades en diseno y modelado de bases de datos relacionales.</ListGroup.Item>
                <ListGroup.Item>Implementacion de consultas complejas utilizando SQL para la manipulacion y recuperacion de datos.</ListGroup.Item>
                <ListGroup.Item>Comprension profunda de la normalizacion y optimizacion de bases de datos para mejorar el rendimiento.</ListGroup.Item>
                <ListGroup.Item>Aplicacion de principios de integridad y seguridad de datos en entornos empresariales.</ListGroup.Item>
                <ListGroup.Item>Exploracion de tecnologias de bases de datos NoSQL y su uso en aplicaciones modernas.</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
);

const RecursosAdicionales = () => (
    <Card>
        <Card.Header>Recursos Adicionales</Card.Header>
        <Card.Body>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Ventajas</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Habilidades Practicas en SQL: Aprender a escribir consultas SQL permite a los estudiantes manipular y gestionar datos de manera eficiente, lo cual es una habilidad muy demandada en el mercado laboral.</ListGroup.Item>
                            <ListGroup.Item>Optimizacion y Rendimiento: Los estudiantes aprenden a optimizar el rendimiento de las bases de datos mediante la normalizacion y el uso de indices, lo cual es crucial para aplicaciones que manejan grandes volumenes de datos.</ListGroup.Item>
                            <ListGroup.Item>Comprension de Sistemas de Informacion: El curso proporciona una comprension profunda de como se estructuran y gestionan los datos en los sistemas de informacion, lo cual es fundamental para roles en analisis de datos y administracion de sistemas.</ListGroup.Item>
                            <ListGroup.Item>Adaptabilidad a Nuevas Tecnologias: Al cubrir tanto bases de datos relacionales como NoSQL, los estudiantes desarrollan la flexibilidad necesaria para adaptarse a diversas tecnologias de almacenamiento de datos.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Desventajas</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Curva de Aprendizaje Pronunciada: Los conceptos avanzados de bases de datos, como la normalizacion o las transacciones ACID, pueden ser dificiles de entender para los principiantes.</ListGroup.Item>
                            <ListGroup.Item>Necesidad de Practicar Regularmente: Al igual que muchos campos tecnicos, la maestria en bases de datos requiere practica constante para adquirir fluidez y confianza.</ListGroup.Item>
                            <ListGroup.Item>Complejidad en Configuraciones de Produccion: Implementar bases de datos en un entorno de produccion puede ser complejo y requiere un profundo conocimiento de arquitectura de sistemas.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Retos Comunes</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Escalabilidad: Disenar bases de datos que puedan crecer con la demanda sin perder eficiencia es un desafio comun.</ListGroup.Item>
                            <ListGroup.Item>Integracion de Datos: Combinar datos de multiples fuentes y tipos puede ser complejo y a menudo requiere tecnicas avanzadas de ETL (Extraccion, Transformacion, Carga).</ListGroup.Item>
                            <ListGroup.Item>Seguridad de Datos: Proteger los datos sensibles contra accesos no autorizados es un reto continuo, especialmente con el aumento de las amenazas ciberneticas.</ListGroup.Item>
                            <ListGroup.Item>Gestion de Transacciones Concurrentes: Asegurar la integridad de los datos cuando multiples usuarios acceden y modifican la base de datos simultaneamente puede ser desafiante.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card.Body>
    </Card>
);

const BaseDeDatos = () => (
    <Container>
        <BotonRegresar />
        
        <br />
        <header>
            <img src="https://i.ibb.co/gZz1vmZ/Captura-de-Pantalla-2024-07-23-a-la-s-16-07-34.png" width="1420" height="300" alt="Base de Datos" />
            <div className="text-center">
                <h1>BASE DE DATOS</h1>
            </div>
        </header>
        <h2>Descripcion del Curso</h2>
        <p>El curso de Bases de Datos esta disenado para proporcionar a los estudiantes una comprension solida de los
            conceptos fundamentales y las practicas esenciales en la gestion de datos. A lo largo del curso, los
            estudiantes aprenderan a disenar, implementar y administrar bases de datos utilizando tecnologias modernas,
            con un enfoque particular en los sistemas de gestion de bases de datos relacionales y NoSQL. Los temas
            cubiertos incluyen el modelado de datos, el lenguaje SQL para la manipulacion de datos, la
            normalizacion de bases de datos, la implementacion de transacciones y el manejo de la concurrencia. Ademas,
            se exploran temas avanzados como la optimizacion del rendimiento, la seguridad de datos, y el uso de bases
            de datos NoSQL para el almacenamiento de datos no estructurados.
        </p>
        <EtapasCurso />
        <PuntosClave />
        <RecursosAdicionales />
        <footer>
            <img src="https://i.ibb.co/1qLxzJk/Captura-de-Pantalla-2024-07-23-a-la-s-12-12-41.png" width="1420" height="197" alt="Footer" />
        </footer>
    </Container>
);

export default BaseDeDatos;
