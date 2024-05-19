
import './Kids.css'
const Kids = ()=> {
    return(
 <section className="kids">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-11 col-sm-12">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="kids_img">
                            <img src="images/kids.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="kids_con">
                            <h2>Create profiles for kids</h2>
                            <br />
                            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>
    )
};

export default Kids;