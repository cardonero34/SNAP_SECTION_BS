/* sistema de gid */

export const Home = () => {
    return (
        <>
            <div className="container text-center">
                {/* las columnas las puedes distrinuir teniendo en cuenta un margen de 0 a 12 calculados entre cada columna*/}
                <h1>row 1</h1>
                <div className="row">
                                     {/* responsive 👇*/}
                    <div className="col-6 col-md-4 col-lg-3 border">
                        Column
                    </div>
                                     {/* responsive 👇*/}                    
                    <div className="col-6 col-md-4 col-lg-3 border">
                        Column
                    </div>
                                     {/* responsive 👇*/}                    
                    <div className="col-6 col-md-4 col-lg-3 border">
                        Column
                    </div>
                                     {/* responsive 👇*/}                    
                    <div className="col-6 col-md-12 col-lg-3 border">
                        Column
                    </div>
                </div>
                <h1>row 2</h1>
                <div className="row">
                    <div className="col-6">
                        Column
                    </div>
                    <div className="col-6">
                        Column
                    </div>
                    <div className="col-6">
                        Column
                    </div>
                    <div className="col-6">
                        Column
                    </div>
                </div>
            </div>
        </>
    )
}
