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
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SISTEMAS OPERATIVOS I</td>
                        <td>
                            La primera etapa del curso se enfoca en introducir a los estudiantes a los conceptos básicos de
                            los sistemas operativos. Se cubren temas fundamentales como la arquitectura de sistemas
                            operativos, los procesos y la planificación de procesos. Los estudiantes aprenderán sobre la
                            gestión de memoria, incluyendo la paginación y segmentación, así como los mecanismos de
                            comunicación y sincronización entre procesos. Además, se estudiarán los sistemas de archivos y
                            la gestión de dispositivos de entrada/salida, sentando las bases para una comprensión sólida del
                            funcionamiento interno de un sistema operativo.
                        </td>
                    </tr>
                    <tr>
                        <td>SISTEMAS OPERATIVOS II</td>
                        <td>
                            En la segunda etapa del curso, los estudiantes profundizan en aspectos avanzados de los sistemas
                            operativos. Se explorarán temas como la seguridad y protección del sistema, la virtualización, y
                            los sistemas distribuidos. Los estudiantes aprenderán sobre la gestión avanzada de memoria, las
                            políticas de planificación de procesos, y la implementación de sistemas de archivos distribuidos.
                            Esta etapa también abordará la programación concurrente y la solución de problemas complejos
                            relacionados con la sincronización y comunicación en sistemas operativos modernos.
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
                <ListGroup.Item>Comprensión de la arquitectura y funcionamiento de sistemas operativos modernos.</ListGroup.Item>
                <ListGroup.Item>Gestión de procesos y planificación eficiente de recursos del sistema.</ListGroup.Item>
                <ListGroup.Item>Implementación de mecanismos de comunicación y sincronización entre procesos.</ListGroup.Item>
                <ListGroup.Item>Exploración de técnicas avanzadas de gestión de memoria y almacenamiento.</ListGroup.Item>
                <ListGroup.Item>Estudio de la seguridad y protección de sistemas operativos en entornos distribuidos.</ListGroup.Item>
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
                            <ListGroup.Item>Habilidades Técnicas Avanzadas: Los estudiantes adquieren habilidades avanzadas en la administración y configuración de sistemas operativos.</ListGroup.Item>
                            <ListGroup.Item>Comprensión de Sistemas Complejos: El curso proporciona una comprensión profunda de cómo se gestionan los recursos de hardware y software en un sistema operativo.</ListGroup.Item>
                            <ListGroup.Item>Aplicaciones en Seguridad Informática: Los conocimientos adquiridos son aplicables en el campo de la seguridad informática.</ListGroup.Item>
                            <ListGroup.Item>Base para Desarrollo de Software: Comprender el funcionamiento de los sistemas operativos es esencial para desarrollar software eficiente.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Desventajas</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Complejidad Técnica: Los conceptos avanzados de sistemas operativos, como la concurrencia y la gestión de memoria, pueden ser desafiantes.</ListGroup.Item>
                            <ListGroup.Item>Requiere Práctica Regular: La maestría en sistemas operativos requiere práctica constante y experimentación.</ListGroup.Item>
                            <ListGroup.Item>Curva de Aprendizaje Pronunciada: La comprensión de las arquitecturas y funcionamiento interno de los sistemas operativos puede ser compleja.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Retos Comunes</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Gestión de Concurrencia: Asegurar la sincronización adecuada entre procesos concurrentes es un desafío común en sistemas operativos.</ListGroup.Item>
                            <ListGroup.Item>Optimización de Recursos: Diseñar sistemas operativos que utilicen eficientemente los recursos de hardware y software es un reto constante.</ListGroup.Item>
                            <ListGroup.Item>Seguridad del Sistema: Proteger el sistema operativo de amenazas y vulnerabilidades es un desafío continuo, especialmente en entornos distribuidos.</ListGroup.Item>
                            <ListGroup.Item>Integración de Nuevas Tecnologías: Adaptarse a tecnologías emergentes y mantener la compatibilidad con sistemas operativos existentes requiere aprendizaje continuo.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card.Body>
    </Card>
);

const SistemasOperativos = () => (
    <Container>
        <BotonRegresar />
        
        <br />
        <header>
            <img src="https://i.ibb.co/9rjprTz/Captura-de-Pantalla-2024-07-23-a-la-s-16-13-19.png" width="1420" height="300" alt="Sistemas Operativos" />
            <div className="text-center">
                <h1>Sistemas Operativos</h1>
            </div>
        </header>
        <h2>Descripción del Curso</h2>
        <p>El curso de Sistemas Operativos está diseñado para proporcionar a los estudiantes una comprensión profunda de los principios y prácticas fundamentales que subyacen al funcionamiento de los sistemas operativos. A lo largo del curso, los estudiantes explorarán los componentes clave de los sistemas operativos, incluyendo la gestión de procesos, memoria, almacenamiento y dispositivos de entrada/salida. Se estudiarán temas como la planificación de procesos, la sincronización, la gestión de memoria y el manejo de archivos. Además, el curso abarca aspectos relacionados con la seguridad y protección del sistema, así como las arquitecturas de sistemas operativos modernos y distribuidos.</p>
        <EtapasCurso />
        <PuntosClave />
        <RecursosAdicionales />
        <footer>
            <img src="https://i.ibb.co/1qLxzJk/Captura-de-Pantalla-2024-07-23-a-la-s-12-12-41.png" width="1420" height="197" alt="Footer" />
        </footer>
    </Container>
);

export default SistemasOperativos;
