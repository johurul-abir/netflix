import "./Banner.css"
const Banner = () =>{
    return <section className="banner">
        <div className="nav">

            <div className="header w-100">
               <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <div className="col button">
                        <button>sign In</button>
                    </div>
                    
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="header-content">
                            <h1>Unlimited movies, TV shows, and more</h1>
                            <p>Watch anywhere. Cancel anytime.</p>
                            <br/>
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>

                            <form action="">
                                    <input type="text" name="email" placeholder="Email Address"/>
                           
                                <button type = "submit" >Get Started</button>
                     

                            </form>

                        </div>
                    </div>
                </div>
               </div>
               
            </div>

            <div className="logo">
                
            </div>

            <div className="overlay">

            </div>
        </div>
    </section>
}


export default Banner;