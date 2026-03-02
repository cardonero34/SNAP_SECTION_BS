import "../stylesheets/Careers.css"

export const Careers = () => {
    return (
        <>
            <div className="careers-page">
                <section>
                    <div className="hero__content d-flex justify-content-center align-items-center flex-column">
                        <p>Careers Page</p>
                        <p className="title" ><strong> Healthy meals, zero fuss</strong></p>
                        <p>
                            Discover eight quick, whole-food recipes that you can cook
                            tonight—no processed junk, no guesswork.
                        </p>
                        <a className="btn btn-primary btn-lg" data-bs-toggle="button" style={{backgroundColor: "#163a34", borderBlockColor: "#b4d1cc"}} > Start exploring </a>
                    </div>
                </section>
            </div>
        </>
    )
}
