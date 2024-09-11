import { Container, Table, Card, ListGroup, Accordion } from 'react-bootstrap';
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
                        <td>REDES DE COMPUTADORAS I</td>
                        <td>
                            En la primera etapa del curso, los estudiantes son introducidos a los conceptos básicos de las redes de computadoras. Se cubren temas como los modelos de comunicación, el modelo OSI, y los protocolos TCP/IP. Los estudiantes aprenderán sobre los dispositivos de red comunes, como routers y switches, y adquirirán habilidades en la configuración básica de redes locales (LAN). Se abordarán también el direccionamiento IP, las subredes, y el manejo de dispositivos de red, preparando a los estudiantes para entender el funcionamiento interno de una red.
                        </td>
                    </tr>
                    <tr>
                        <td>REDES DE COMPUTADORAS II</td>
                        <td>
                            La segunda etapa del curso profundiza en los aspectos avanzados de las redes de computadoras. Los estudiantes aprenderán sobre la configuración y administración de redes de área amplia (WAN), el uso de tecnologías de enrutamiento avanzado, y las técnicas de seguridad de redes. Además, se explorarán temas como la virtualización de redes, la configuración de redes inalámbricas, y la integración de servicios de red. Esta etapa se enfoca en preparar a los estudiantes para enfrentar los retos de las redes modernas y la gestión de infraestructuras de TI a gran escala.
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
                <ListGroup.Item>Desarrollo de habilidades prácticas en la configuración y gestión de redes de computadoras.</ListGroup.Item>
                <ListGroup.Item>Comprensión profunda de los protocolos de red y el modelo OSI.</ListGroup.Item>
                <ListGroup.Item>Implementación de estrategias de seguridad para proteger las redes contra amenazas cibernéticas.</ListGroup.Item>
                <ListGroup.Item>Aprendizaje sobre tecnologías de enrutamiento y conmutación en redes locales y de área amplia.</ListGroup.Item>
                <ListGroup.Item>Exploración de tecnologías emergentes como redes definidas por software (SDN) y virtualización de redes.</ListGroup.Item>
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
                            <ListGroup.Item>Desarrollo de Habilidades Técnicas: Los estudiantes adquieren habilidades prácticas que son altamente valoradas en el mercado laboral.</ListGroup.Item>
                            <ListGroup.Item>Comprensión de Infraestructuras de TI: El curso proporciona una comprensión completa de cómo funcionan las infraestructuras de red.</ListGroup.Item>
                            <ListGroup.Item>Aplicaciones Prácticas: Los conceptos aprendidos se aplican directamente en la resolución de problemas reales en la configuración y gestión de redes de computadoras.</ListGroup.Item>
                            <ListGroup.Item>Preparación para Certificaciones: El curso prepara a los estudiantes para certificaciones reconocidas en la industria, como Cisco CCNA.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Desventajas</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Curva de Aprendizaje Pronunciada: Los estudiantes pueden encontrar desafiantes algunos conceptos avanzados de redes, como el enrutamiento y la configuración de seguridad.</ListGroup.Item>
                            <ListGroup.Item>Requiere Practicar Regularmente: La maestría en redes de computadoras requiere práctica constante para adquirir fluidez y confianza en la resolución de problemas.</ListGroup.Item>
                            <ListGroup.Item>Complejidad de Configuraciones Avanzadas: Implementar y gestionar redes a gran escala puede ser complejo y requiere un profundo conocimiento técnico.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Retos Comunes</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>Manejo de Seguridad: Proteger las redes contra amenazas cibernéticas es un desafío continuo, especialmente en entornos de TI en constante evolución.</ListGroup.Item>
                            <ListGroup.Item>Escalabilidad de Redes: Diseñar redes que puedan crecer con las necesidades de una organización sin perder eficiencia es un desafío común.</ListGroup.Item>
                            <ListGroup.Item>Integración de Nuevas Tecnologías: Adaptarse a tecnologías emergentes, como la virtualización de redes y las SDN, requiere aprendizaje continuo.</ListGroup.Item>
                            <ListGroup.Item>Solución de Problemas de Conectividad: Identificar y resolver problemas de conectividad en redes complejas puede ser un reto significativo.</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card.Body>
    </Card>
);

const RedesComputadoras = () => (
    <Container>
        <BotonRegresar />
        <br />
        <header>
            <img src="https://i.ibb.co/sCfYwdm/Captura-de-Pantalla-2024-07-23-a-la-s-16-10-33.png" width="1420" height="300" alt="Redes de Computadoras" />
            <div className="text-center">
                <h1>REDES DE COMPUTADORAS</h1>
            </div>
        </header>
        <h2>Descripción del Curso</h2>
        <p>
            El curso de Redes de Computadoras está diseñado para proporcionar a los estudiantes una comprensión integral de los principios fundamentales y las tecnologías subyacentes en las redes de computadoras. A lo largo del curso, los estudiantes explorarán las arquitecturas de red, los protocolos de comunicación, y las técnicas de configuración y gestión de redes. Se estudiarán temas como el modelo OSI, protocolos TCP/IP, direccionamiento IP, enrutamiento, y seguridad de redes, así como el diseño y la implementación de redes seguras y eficientes.
        </p>
        <EtapasCurso />
        <PuntosClave />
        <RecursosAdicionales />
        <footer>
            <img src="https://i.ibb.co/1qLxzJk/Captura-de-Pantalla-2024-07-23-a-la-s-12-12-41.png" width="1420" height="197" alt="Footer" />
        </footer>
    </Container>
);

export default RedesComputadoras;
