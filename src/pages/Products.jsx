import { Link } from "react-router-dom";
import PRODUCTS from "../data";

export const Products = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>Product</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item active">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={"/products"} className="text-secondary">
                      Products
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container content">
          <div className="row products-row">
            {PRODUCTS.map((product) => {
              return (
                <div key={product.id} className="col-lg-4">
                  <div className="card">
                    <div className="img-wrap">
                      <img src={product.image} alt="image" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text"> {product.details} </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          Price: <strong>{product.price}</strong>
                        </span>
                        <Link
                          to={`/products/${product.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
