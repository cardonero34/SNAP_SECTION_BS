import "../stylesheets/About.css"

export const About = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#e5eff5", height: "93vh" }}>
                <div className="row rounded-3 shadow" style={{ width: "43%", backgroundColor: "#ffffff", overflow: "hidden" }}>
                    <div className="col-12 p-5">
                        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#2ab2af" }}>Join our community</h2>
                        <p style={{ fontSize: "18px", color: "#c0df34", fontWeight: "bold" }} className="mt-3 m-0">30-day, hassle-free money back guarantee</p>
                        <p style={{ fontSize: "16px", color: "#98a6bd" }} className="lh-lg m-0">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                    </div>
                    <div className="col-6 p-5" style={{ backgroundColor: "#2ab2af", color: "white" }}>
                        <h2 style={{ fontSize: "18px", fontWeight: "bold" }} >Monthly Subscription</h2>
                        <p className="m-0" style={{ color: "#ffffff80" }}> <span style={{ fontSize: "32px", fontWeight: "bold", color: "white" }}>$29</span> per month</p>
                        <p>Full access for less than $1 a day</p>
                        <a className="btn btn-lg w-100 shadow mt-3" style={{ backgroundColor: "#c0df34", color: "white", fontSize: "16px", fontWeight: "bold" }} > Sign Up </a>
                    </div>
                    <div className="col-6 p-5" style={{ backgroundColor: "#2ab2afd9", color: "white" }}>
                        <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Why Us</h2>
                        <p className="mt-3" style={{ fontSize: "14px", color: "#ffffffbf ", width: "77%" }}>
                        Tutorials by industry experts
                        Peer & expert code review
                        Coding exercises
                        Access to our GitHub repos
                        Community forum
                        Flashcard decks
                        New videos every week.</p>
                </div>
            </div>
        </div >
        </>
    )
}
