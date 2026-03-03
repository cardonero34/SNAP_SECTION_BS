import { Comp1 } from "../components/Comp1"
import "../stylesheets/Careers.css"

export const Careers = () => {
    return (
        <>
            <div className="careers-page" style={{ backgroundColor: "#f6f5f1" }}>
                <section className="d-flex flex-column gap-5 align-items-center">
                    <div className="pb-4 pt-5 hero__content d-flex justify-content-center align-items-center flex-column" style={{ width: "80%" }}>
                        <p className="title mb-1"> Healthy meals, zero fuss </p>
                        <p className="text-center mb-5">
                            Discover eight quick, whole-food recipes that you can cook tonight
                            <br />—no processed junk, no guesswork.
                        </p>
                        <a className="btn btn-lg" style={{ backgroundColor: "#163a34", color: "white" }} > Start exploring </a>
                    </div>
                    <div style={{ width: "80%" }}>
                        <div className="rounded-5" style={{ backgroundColor: "White" }}>
                            <img src="../public/img_careers/image-home-hero-large.webp" className="img-fluid p-3 rounded-5" />
                        </div>
                    </div>
                    <div style={{ width: "80%" }} className="border-bottom border-1 border-grey py-5">
                        <p className="title2 text-center m-0"> What you’ll get </p>
                        <div className="row py-5">
                            <div className="col ">
                                <Comp1 img="../public/img_careers/icon-whole-food-recipes.svg" title="Whole-food recipes" description="Each dish uses everyday, unprocessed ingredients." />
                            </div>
                            <div className="col ">
                                <Comp1 img="../public/img_careers/icon-minimum-fuss.svg" title="Minimum fuss" description="All recipes are designed to make eating healthy quick and easy." />
                            </div>
                            <div className="col ">
                                <Comp1 img="../public/img_careers/icon-search-in-seconds.svg" title="Search in seconds" description="Filter by name or ingredient and jump straight to the recipe you need." />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "80%" }} className="container text-center p-0 m-0">
                        <div className="d-flex flex-row gap-5 justify-content-between py-5">
                            <div style={{width: "45%"}} className="d-flex flex-column justify-content-center">
                                <p className="title2 text-start"> Built for real life </p>
                                <p className="text-start">
                                    Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.
                                    <br /><br />
                                    Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
                                </p>
                            </div>
                            <div style={{width: "55%"}}>
                                <img src="../public/img_careers/image-home-real-life-large.webp" className="rounded-4" style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "80%", backgroundColor: "#e0e6e3" }} className="container text-center rounded-4 p-0 overflow-hidden">
                        <div className="py-5 my-5 position-relative">
                            <p className="title2 mb-2"> Ready to cook smarter? </p>
                            <p className="mb-5">
                                Hit the button, pick a recipe, and get dinner on the table—fast.
                            </p>
                            <a className="btn btn-lg" style={{ backgroundColor: "#163a34", color: "white" }} > Browse recipes </a>
                            <img src="../public/img_careers/pattern-fork.svg" style={{
                                position: "absolute",
                                left: "-65px",
                                top: "-10px"
                            }} />
                            <img src="../public/img_careers/pattern-knife.svg" style={{
                                position: "absolute",
                                right: "-54px",
                                top: "-10px"
                            }} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
