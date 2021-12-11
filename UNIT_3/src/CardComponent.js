import react, { useState } from 'react'
function CardComponent(props) {
    //The below lines are only for testing 
    /*
    console.log(props.array)    
    */
    let myarr = props.array;
    //The Below Syntax is showing the usage of hooks --> useState
    let [totalPrice, setTotalPrice] = useState(Number(0));
    let [quan1, setQuan1] = useState(Number(0));
    let [quan2, setQuan2] = useState(Number(0));
    let [quan3, setQuan3] = useState(Number(0));
    let [quan4, setQuan4] = useState(Number(0));
    let clicked = -1;

    function click1() {
        clicked = 0;
        setTotalPrice(totalPrice + myarr[clicked].price);
        setQuan1(quan1 + 1);
    }
    function click2() {
        clicked = 1;
        setTotalPrice(totalPrice + myarr[clicked].price);
        totalPrice += myarr[clicked].price;
        setQuan2(quan2 + 1);
    }
    function click3() {
        clicked = 2;
        setTotalPrice(totalPrice + myarr[clicked].price);
        totalPrice += myarr[clicked].price;
        setQuan3(quan3 + 1);
    }
    function click4() {
        clicked = 3;
        setTotalPrice(totalPrice + myarr[clicked].price);
        totalPrice += myarr[clicked].price;
        setQuan4(quan4 + 1);
    }
    return (
        <div>
            <div className="mainWrapper">
                {/* <CardFormat fil_Items={myarr[0]} quan={0} />
            <CardFormat fil_Items={myarr[1]} />
            <CardFormat fil_Items={myarr[2]} />
            <CardFormat fil_Items={myarr[3]} /> */}
                < div className="cards" key={myarr[0].id} >
                    <h2>{myarr[0].name}</h2>
                    <h4>PRICE : {myarr[0].price}</h4>
                    <p>Quantity <button id={"but" + myarr[0].id}>{quan1}</button> <button onClick={click1}>+</button></p>
                </div >
                < div className="cards" key={myarr[1].id} >
                    <h2>{myarr[1].name}</h2>
                    <h4>PRICE : {myarr[1].price}</h4>
                    <p>Quantity <button id={"but" + myarr[1].id}>{quan2}</button> <button onClick={click2}>+</button></p>
                </div >
                < div className="cards" key={myarr[2].id} >
                    <h2>{myarr[2].name}</h2>
                    <h4>PRICE : {myarr[2].price}</h4>
                    <p>Quantity <button id={"but" + myarr[2].id}>{quan3}</button> <button onClick={click3}>+</button></p>
                </div >
                < div className="cards" key={myarr[3].id} >
                    <h2>{myarr[3].name}</h2>
                    <h4>PRICE : {myarr[3].price}</h4>
                    <p>Quantity <button id={"but" + myarr[3].id}>{quan4}</button> <button onClick={click4}>+</button></p>
                </div >
            </div>
            <div>
                <h1>The Total Price is : {totalPrice}</h1>
            </div>
        </div>
    )
}
export default CardComponent;