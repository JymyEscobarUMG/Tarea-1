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
                        <td>Programacion I</td>
                        <td>
                            En este curso, se introduce a los estudiantes a los conceptos basicos de la programacion utilizando el entorno de desarrollo NetBeans. Se abordan temas fundamentales como variables y tipos de datos, operadores aritmeticos y logicos, y estructuras de control, incluyendo condicionales y bucles. Ademas, se ensena la definicion y uso de funciones para modularizar el codigo, asi como el manejo de errores y excepciones para crear programas robustos. El curso tambien incluye una guia para la instalacion y configuracion de NetBeans, permitiendo a los estudiantes escribir, compilar y ejecutar programas simples mientras desarrollan una comprension solida de la logica de programacion y la resolucion de problemas.
                        </td>
                    </tr>
                    <tr>
                        <td>Programacion II</td>
                        <td>
                            En este curso se profundiza en conceptos avanzados de programacion, incluyendo la implementacion de algoritmos y el manejo de estructuras de control mas complejas. Se estudian temas como el uso avanzado de funciones, la manipulacion de arrays y el diseno de programas modulares y eficientes. Se hace enfasis en la resolucion de problemas mediante tecnicas de programacion y en el desarrollo de habilidades para crear software robusto y mantenible.
                        </td>
                    </tr>
                    <tr>
                        <td>Programacion III</td>
                        <td>
                            Este curso esta enfocado en estructuras de datos, proporcionando una comprension detallada de como almacenar, organizar y manejar datos de manera eficiente. Se exploran diferentes tipos de estructuras de datos como listas, pilas, colas, arboles y grafos, asi como sus aplicaciones y algoritmos asociados. El curso tambien aborda la implementacion y analisis de estas estructuras, optimizacion de rendimiento y resolucion de problemas complejos mediante el uso adecuado de las estructuras de datos.
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
                <ListGroup.Item>Uso de Java y NetBeans como herramientas principales.</ListGroup.Item>
                <ListGroup.Item>Desarrollo de habilidades de programacion desde lo basico hasta lo avanzado.</ListGroup.Item>
                <ListGroup.Item>Aplicacion de conceptos teoricos en proyectos practicos.</ListGroup.Item>
                <ListGroup.Item>Preparacion para enfrentar desafios reales en el desarrollo de software.</ListGroup.Item>
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
                            <ListGroup.Item>Desarrollo de Habilidades Practicas: Trabajar en proyectos y resolver problemas practicos te permitira aplicar directamente los conceptos aprendidos, consolidando tu comprension.</ListGroup.Item>
                            <ListGroup.Item>Mejora en la Resolucion de Problemas: La exposicion a una variedad de estructuras de datos y algoritmos fortalece tus habilidades para abordar y resolver problemas complejos.</ListGroup.Item>
                            <ListGroup.Item>Uso de Herramientas Profesionales: Aprender a utilizar herramientas como NetBeans proporciona una ventaja en el mundo profesional, facilitando la transicion a entornos de trabajo reales.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Desventajas</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Curva de Aprendizaje Inicial: Los conceptos avanzados, especialmente en estructuras de datos, pueden ser dificiles de entender al principio, requiriendo tiempo y practica.</ListGroup.Item>
                            <ListGroup.Item>Complejidad de Implementacion: Implementar y optimizar estructuras de datos complejas puede resultar desafiante y llevar a errores que deben ser depurados cuidadosamente.</ListGroup.Item>
                            <ListGroup.Item>Requisitos Tecnicos: La configuracion de herramientas y entornos puede ser complicada para algunos estudiantes, especialmente aquellos con menos experiencia tecnica.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Retos Comunes</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Gestion del Tiempo: Equilibrar el estudio de conceptos teoricos con la practica y los proyectos puede ser dificil, especialmente al tener multiples asignaturas.</ListGroup.Item>
                            <ListGroup.Item>Aplicacion de Conceptos: Transferir conocimientos teoricos a aplicaciones practicas puede requerir ajustes y ensayos, a menudo acompa�ados de frustracion.</ListGroup.Item>
                            <ListGroup.Item>Actualizacion de Conocimientos: Mantenerse al dia con las ultimas herramientas y tecnicas en programacion puede ser desafiante a medida que evolucionan los estandares y tecnologias.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card.Body>
    </Card>
);

const Programacion = () => (
    <Container>
        <BotonRegresar />
        
        <br />
        <header>
            <img src="https://i.ibb.co/m9b2H0z/Captura-de-Pantalla-2024-07-23-a-la-s-11-16-15.png" width="1420" height="300" alt="Programacion" />
            <div className="text-center">
                <h1>PROGRAMACION</h1>
            </div>
        </header>
        <h2>Descripcion del Curso</h2>
        <p>Durante el transcurso de la carrera, llevamos tres etapas de programacion utilizando Java y el entorno de desarrollo NetBeans. Cada una de estas etapas se enfoca en diferentes aspectos del desarrollo de software, aumentando en complejidad y profundidad a medida que avanzamos.</p>
        <EtapasCurso />
        <PuntosClave />
        <RecursosAdicionales />
        <footer>
            <img src="https://i.ibb.co/1qLxzJk/Captura-de-Pantalla-2024-07-23-a-la-s-12-12-41.png" width="1420" height="197" alt="Footer" />
        </footer>
    </Container>
);

export default Programacion;
