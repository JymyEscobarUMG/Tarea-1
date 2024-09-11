import { Container, Table, ListGroup, Card, Accordion } from 'react-bootstrap';
import './css.css';
import { BotonRegresar } from './botonRegresar';

export const Calculo = () => {
    return (
        <Container>
            <BotonRegresar />
            
            <br />
            <header>
                <img src="https://i.ibb.co/FwF2x1c/Captura-de-Pantalla-2024-07-23-a-la-s-12-40-09.png" width="1420" height="300" alt="Calculo Header" />
                <div className="text-center">
                    <h1>CALCULO</h1>
                </div>
            </header>

            <h2>Descripción del Curso</h2>
            <p>Durante el transcurso de la carrera, hemos completado tres etapas de cálculo, cada una abordando diferentes niveles de complejidad en el estudio de las matemáticas. Estas etapas están diseñadas para desarrollar una comprensión profunda de los conceptos fundamentales del cálculo y su aplicación en diversos contextos.</p>

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
                                <td>Cálculo I</td>
                                <td>En este curso se introducen los conceptos básicos del cálculo diferencial e integral. Se cubren temas como límites, derivadas, y la aplicación de la derivada en la resolución de problemas. Además, se estudia la integral y sus aplicaciones básicas en áreas como el cálculo de áreas bajo curvas y la resolución de ecuaciones diferenciales simples.</td>
                            </tr>
                            <tr>
                                <td>Cálculo II</td>
                                <td>Este curso profundiza en el cálculo integral, incluyendo técnicas avanzadas de integración y aplicaciones de la integral en el cálculo de volúmenes y longitudes de curvas. Se introduce el concepto de series infinitas y secuencias, así como su convergencia y aplicaciones prácticas en la resolución de problemas matemáticos complejos.</td>
                            </tr>
                            <tr>
                                <td>Cálculo III</td>
                                <td>El enfoque de este curso es el cálculo multivariable. Se estudian temas como funciones de varias variables, gradientes, y la integración en varias dimensiones. Además, se exploran conceptos avanzados como superficies parametrizadas y el teorema de Stokes, proporcionando herramientas para resolver problemas en espacios tridimensionales y más allá.</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>Puntos Clave del Curso</Card.Header>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item>Desarrollo de habilidades en cálculo diferencial e integral a través de problemas prácticos.</ListGroup.Item>
                        <ListGroup.Item>Aplicación de técnicas avanzadas en la resolución de problemas matemáticos complejos.</ListGroup.Item>
                        <ListGroup.Item>Comprensión profunda de conceptos multivariables y sus aplicaciones en contextos tridimensionales.</ListGroup.Item>
                        <ListGroup.Item>Preparación para desafíos en matemáticas avanzadas y su integración en diversas disciplinas.</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>Recursos Adicionales</Card.Header>
                <Card.Body>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ventajas</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>Desarrollo de Habilidades Matemáticas: Resolver problemas de cálculo te permitirá desarrollar habilidades analíticas y de resolución de problemas aplicables en diversas áreas.</ListGroup.Item>
                                    <ListGroup.Item>Aplicación Práctica: Los conceptos aprendidos tienen aplicaciones en ciencias físicas, ingeniería y economía, proporcionando una base sólida para estudios avanzados.</ListGroup.Item>
                                    <ListGroup.Item>Mejora en el Pensamiento Crítico: El estudio de cálculo fomenta el pensamiento crítico y la capacidad de abordar problemas complejos desde múltiples perspectivas.</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Desventajas</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>Complejidad del Material: Los conceptos de cálculo pueden ser abstractos y complejos, lo que puede resultar desafiante para algunos estudiantes.</ListGroup.Item>
                                    <ListGroup.Item>Requiere Práctica Constante: La comprensión de los temas avanza con la práctica continua, lo que puede demandar un esfuerzo significativo y tiempo de estudio.</ListGroup.Item>
                                    <ListGroup.Item>Dificultad en Aplicaciones Avanzadas: Aplicar conceptos a problemas avanzados puede ser complicado, requiriendo una comprensión sólida y habilidades adicionales.</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Retos Comunes</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>Gestión del Tiempo: Equilibrar el estudio de conceptos teóricos con la práctica y los proyectos puede ser difícil, especialmente al manejar múltiples asignaturas.</ListGroup.Item>
                                    <ListGroup.Item>Transferencia de Conceptos: Aplicar conocimientos teóricos a problemas prácticos a menudo requiere ajustes y ensayos, lo que puede ser frustrante.</ListGroup.Item>
                                    <ListGroup.Item>Actualización Continua: Mantenerse al día con técnicas matemáticas avanzadas y sus aplicaciones puede ser exigente a medida que surgen nuevas metodologías y problemas.</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>

            <footer>
                <img src="https://i.ibb.co/1qLxzJk/Captura-de-Pantalla-2024-07-23-a-la-s-12-12-41.png" width="1420" height="197" alt="Footer Image" />
            </footer>
        </Container>
    );
}
