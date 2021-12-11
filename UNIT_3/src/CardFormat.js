
function CardFormat(props) {
    function handleClick(e) {
        console.log(e.target)
    }

    return (
        <div>
            < div className="cards" key={props.fil_Items.id} >
                <h2>{props.fil_Items.name}</h2>
                <h4>PRICE : {props.fil_Items.price}</h4>
                <p>Quantity <button id={"but" + props.fil_Items.id}>{props.quan}</button> <button onClick={handleClick}>+</button></p>
            </div >

        </div>

    )
}

export default CardFormat;