
import './Demo.css'
const Tvfeture = () => {
   return(
<section className='tvdemo'>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="demo-content">
                    <h1>Enjoy on your TV</h1>
                    <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                    <br />
                </div>
            </div>
            <div className="col-md-6">
                <div className="tv">
                    <img src="images/tv.png" alt="" />
                    <video src="images/video-tv-0819.m4v" type ="video/mp4" controls autoPlay ></video>
                </div>
            </div>
        </div>
    </div>
</section>
)

}


export default Tvfeture;