

export const Login = () => {
    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{ height: "90vh" }}>
                <div className="row" >
                    <div className="col d-flex align-items-center justify-content-center rounded-start-5 my-5 shadow-lg" style={{ backgroundColor: "#e5eff5" }}>
                        <div className="w-75">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Enter your registered email or username</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input " type="checkbox" id="autoSizingCheck"/>
                                        <label className="form-check-label">
                                            Remember me
                                        </label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 border-0" style={{backgroundColor: "#d67c61"}}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col p-0 ">
                        <img src="/imgLR/imgL.jpg" className="img-fluid rounded-5 shadow-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}
