import marker from "./assets/marker.png" 

export default function Entry(props) {
    console.log(props);

    return (
        <>
            <div className="main">
                <div className="mainimg"> 
                     <img src={props.entry.img.src} alt={props.entry.imgalt} className="mt" />
                </div>
                <div className="txt">
                    <div className="sec">
                        <img src={marker} alt="" />
                        <p>{props.entry.country}</p>
                        <a href={props.entry.googleMapsLink}> view on google map </a>
                    </div>
                    <h2> {props.entry.title} </h2>
                    <p> {props.entry.date} </p>
                    <p> {props.entry.text}</p>


                </div>

            </div>






        </>

    );


}