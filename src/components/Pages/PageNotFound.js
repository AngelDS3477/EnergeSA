import { Link } from "react-router-dom"

const PageNotFound = () =>
    <main className="container text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="lead">No te quedes sin energía</p>
        <Link to="/" className="btn btn-primary">Sumate a la #REVOLUCIÓNSOLAR</Link>
    </main>

export default PageNotFound