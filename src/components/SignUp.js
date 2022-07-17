import '../assets/all.css';

export const SignUp = () => {
    return(
        // <!-- Section: Design Block -->
        <section class="text-center lanimation pt-5">
          <div class="card mx-4 mx-md-5 shadow-5-strong cardgg">
            <div class="card-body py-5 px-md-5">
        
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <h2 class="fw-bold mb-5">Sign up now</h2>
                  <form>
                    
                  <div className='row'>
                <div className="col-sm-6">
                    <label className="form-label required"for="">Nombre</label>
                    <input type="text"required="required" placeholder="Ej: fdsfds" autocomplete="given-name" className="form-control" ng-model="firstName" />  
                </div>
                <div className="col-sm-6">
                    <label className="form-label required"for="">Apellido</label>
                    <input type="text"required="required"placeholder="Ej: sfdsfs" autocomplete="family-name" className="form-control" ng-model="lastName" />
                </div> 
                <div className="col-sm-6">
                    <label className="form-label required"for="">Email</label>
                    <input type="email"required="required" placeholder="Ej: fdfdfssd@mail.com" autocomplete="email" className="form-control" ng-model="email" />
                </div>
                <div className="col-sm-6">
                    <label className="form-label required"for="">Contraseña</label>
                    <input type="password"required="required" placeholder="" validate-password="" className="form-control" ng-model="password" data-toggle-password="" />
                </div>
                <div className="col-sm-6">
                    <label className="form-label" for="">DNI</label>
                    <input type="text"className="form-control" />
                </div>
                

                
                <div className="row mt-4">
                    
                    <div className='col-12'>
                    <input type="checkbox"className="formc col-sm-2" ng-model="subscribedToNewsletter" value="1" />
                    <label for=""className="flabel col-sm-10">
                        Autorizo recibir comunicaciones promocionales y autorizo el uso de mi información para <a href="#a">fines adicionales</a>.
                    </label>
                    </div>
                    
                    <div className='col-12'>
                    <input type="checkbox"required="required" className="formc col-sm-2" ng-model="acceptTerms" value="1" />
                    <label for=""className="flabel col-sm-10">Declaro que he leído y acepto la nueva <a href="#a" target="_blank" >Política de Privacidad</a> y los <a href="#a" target="_blank">Términos y Condiciones</a> de Linio.
                    </label>
                    </div>
                    
                </div>
            </div>

            <button type="submit" className="btn btn-security col-12 bg-secondary text-white mt-5" ng-className="{'btn-disabled': !registration.$valid}" ng-disabled="!registration.$valid">Completar registro</button>
            <input type="hidden" id="registration" name=" " value=" "/>
        
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        // <!-- Section: Design Block -->
    )
}