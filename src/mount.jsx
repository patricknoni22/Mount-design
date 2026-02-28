

export default function Entry(props) {
    console.log(props);

    return (
        <>
            <div className="main">
                <div className="mainimg"> 
                     <img src={props.entry.img.src} alt={props.entry.imgalt} className="mt" />
                </div>
                <div>
                    <div className="sec">
                        <img src="./src/assets/marker.png" alt="" />
                        <p>{props.entry.country}</p>
                        <a href={props.entry.map}>
                            view on google map</a>
                    </div>
                    <h2> {props.entry.title} </h2>
                    <p> {props.entry.date} </p>
                    <p> {props.entry.text}</p>


                </div>

            </div>






        </>

    );


}