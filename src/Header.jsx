import globe from "./assets/globe.png"
export default function Header() {
    return (
        <>

           <header>
                <div >
                    <img src={globe} alt="globe" />
                    <h2>My  travel journal.</h2>
                </div>
           </header>


        </>
    )
}