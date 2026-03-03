
export const Comp1 = ({img, title, description}) => {
    return (
        <>
            <div className="d-flex flex-row justify-content-between">
                <div className="d-grid gap-2">
                    <div style={{ width: "4rem", height: "4rem", backgroundColor: "white" }} className="rounded-3 d-flex align-items-center justify-content-center mb-3">
                        <img src={img} alt="" />
                    </div>
                    <p className="m-0" style={{fontWeight: "700", fontSize: "30px", color: "#163a34"}}>{title}</p>
                    <p className="m-0">{description}</p>
                </div>
            </div>
        </>
    )
}
