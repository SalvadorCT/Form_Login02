import '../assets/all.css';
//importar art.png
import art from '../assets/art.png';

export const Login = () => {
    return(
        // Section: Design Block
    <section class="text-center text-lg-start lanimation">

    <div class="container py-4">
        <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card cascading-right cardlog">
            <div class="card-body p-5 shadow-5 text-center">
                <h2 class="fw-bold mb-5">Login now</h2>
                <form>
                {/* 2 column grid layout with text inputs for the first and last names */}

                {/* Email input */}
                <div class="form-outline mb-4">
                    <label class="form-lb" for="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" required="required"class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-lb" for="form3Example4">Password</label>
                    <input type="password" id="form3Example4" required="required"class="form-control" />
                </div>

                <div class="form-check d-flex justify-content-center mb-4">
                <a className="link-low-sm sub" href="a">
                            Olvidé mi contraseña
                        </a>
                </div>

                <button type="submit" class="btn btn-warning btn-block mb-4">
                    Iniciar sesión
                </button>
                </form>
            </div>
            </div>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 boxtienda">
            <img src={art} class=" rounded-4 shadow-4 imgc"
            alt="" />
        </div>
        </div>
    </div>
    {/* Jumbotron */}
    </section>

    )
}