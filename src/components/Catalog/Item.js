import { Link } from "react-router-dom"
import "../../resources/sass/main.scss"

const Item = ({item}) =>
    <div className="card h-100 text-center">
        <span className="badge bg-primary text-white position-absolute tag-potencia p-2 m-2">{item.shortDescription}</span>
        <Link to={'/item/' + item.id}>
            <img src={item.image} className="card-img-top pt-3" alt="" />
        </Link>
        <div className="card-body p-4">
            <h5 className="fw-bolder">
                <Link to={'/item/' + item.id} className="text-decoration-none">{item.title}</Link>
            </h5>
            <strong>
                <Link to={'/item/' + item.id} className="text-decoration-none">${item.price}</Link>
            </strong>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <Link to={'/item/' + item.id} className="btn btn-primary text-white mt-auto">Comprar</Link>
        </div>
    </div>

export default Item