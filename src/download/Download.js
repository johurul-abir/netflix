import './Download.css'
const DwonloadOffline = () => {
    return(
        <section className="download">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="download_image">
                            <img src="images/mobile-0819.jpg" alt="img" />

                            <div className="downloading_box">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="down_item">
                                        <img src="images/boxshot.png" alt="" />
                                        </div>
                                    

                                
                                        <div className="down_item">
                                            <ul>
                                                <li><h4>Stranger Things</h4></li>
                                                <li><p>Downloading...</p></li>
                                            </ul>
                                        </div>
                            

                            
                                        <div className="down_item" id= "gif_icon">
                                            <img src="images/download-icon.gif" alt="" />
                                        </div>
                                                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="download_content">
                            <h2>Download your shows to watch offline</h2>
                            <br/>
                            <h5>Save your favorites easily and always have something to watch.</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};


export default DwonloadOffline;