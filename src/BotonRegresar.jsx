import { Link } from "react-router-dom"

export const BotonRegresar = () => {
    return (
        <nav>
            <a href="index.html">
                <table cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <Link to="/">
                                <td><img src="https://img.icons8.com/ios-filled/50/000000/left.png" alt="Flecha de Regresar" width="20" /></td>
                                <td>Regresar</td>
                            </Link>
                        </tr>
                    </tbody>
                </table>
            </a>
        </nav>
    )
}
