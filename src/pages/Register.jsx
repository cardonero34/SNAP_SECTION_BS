
export const Register = () => {
    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{ height: "90vh" }}>
                <div className="row w-80 d-flex align-items-center" >
                    <div className="col p-0 ">
                        <img src="../public/imgLR/imgR.jpg" className="float-end rounded-5 shadow-lg" style={{ width: "100%" }} />
                    </div>
                    <div className="col d-flex align-items-center justify-content-center rounded-end-5 my-5 shadow-lg" style={{ backgroundColor: "#e5eff5" }}>
                        <div>
                            <form className="row p-5 d-flex justify-content-center">
                                <div className="mb-3 col-6">
                                    <label className="form-label">User Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name"></input>
                                    <div id="nameHelp" className="form-text">Create a unique name.</div>
                                </div>
                                <div className="mb-3 col-6">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" placeholder="- - -" />
                                    <div id="numberphoneHelp" className="form-text">Enter your phone number.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">State</label>
                                    <select id="inputState" className="form-select">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="row">
                                    <div className="col mb-3 form-check">
                                        <input type="checkbox" className="form-check-input"/>
                                        <label className="form-check-label form-text">I want to receive latest news and course updates.</label>
                                    </div>
                                    <div className="col mb-3 form-check">
                                        <input type="checkbox" className="form-check-input"/>
                                        <label className="form-check-label form-text">I agree to the Terms & Privacy Policy</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 border-0" style={{backgroundColor: "#d67c61"}}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
