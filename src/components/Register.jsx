import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <section class="vh-100 bg-image mt-5">
                <div class="mask d-flex align-items-center gradient-custom-3">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card" style={{"border-radius": "15px"}}>
                                    <div class="card-body p-5 mb-3">
                                        <span class="h2 fw-normal mb-0">REGISTER</span>

                                        <form>

                                            <div class="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example1cg">Your Name</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example4cg">Password</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label class="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div class="d-flex justify-content-center">
                                                <button type="button"
                                                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Register</button>
                                            </div>

                                            <p class="text-center text-muted mt-5 mb-0">Have already an account? <NavLink className="nav-link fw-bold text-body" to="/Login"><u>Login here</u></NavLink></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;