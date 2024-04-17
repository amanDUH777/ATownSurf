// import React, { useState } from "react";


// const CartModal = () => {
//     const [showModal, setShowModal] = useState(false)

//     const getModal = (e) => {
//         e.preventDefault()
//         setShowModal(!showModal)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setShowModal(false)
//     }

//     // return (
//     //     <>
//     //         <button type='button' className="cart" onClick={getModal}>&#128722;</button>

//     //         {showModal && (
//     //             <div className="cartModalContainer-background">
//     //                 <span onClick={() => setShowModal(false)} className="closeCartModal">&times;</span>

//     //                 <form action="/action_page.php" onSubmit={handleSubmit} className="cartModalContainer"></form>
//     //                 <h2>checkout</h2>

//     //                 <div className="cartList">
//                         <div class="container">
//                             <form action="/action_page.php">
//                                 <div class="row">
//                                     <h3>billing address</h3>
//                                     <div>
//                                         <label htmlfor="fname"><i class="fa fa-user"></i> full name</label>
//                                         <input type="text" id="fname" name="firstname" placeholder="name as it appears on card">
//                                         <label for="email"><i class="fa fa-envelope"></i> email</label>
//                                         <input type="text" id="email" name="email" placeholder="email@atownsurf.com">
//                                         <label for="adr"><i class="fa fa-address-card-o"></i> address</label>
//                                         <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
//                                         <label for="city"><i class="fa fa-institution"></i> city</label>
//                                         <input type="text" id="city" name="city" placeholder="New York">
//                                     </div>
//                                 <div class="row">
//                                     <div className="col1">
//                                         <label for="state">state</label>
//                                         <input type="text" id="state" name="state" placeholder="NY">
//                                     </div>
//                                     <div className="col1">
//                                         <label for="zip">zip</label>
//                                         <input type="text" id="zip" name="zip" placeholder="10001">
//                                     </div>
//                                 </div>
                                              
//                                 <div class="col-50">
//                                     <h3>payment</h3>
//                                     <label for="fname">accepted cards</label>
//                                         <div className="iconContainer">
//                                             <img src={} className="AtownSurf" style="color:navy;"></img>
//                                             <img src={} className="visa" style="color:blue;"></img>
//                                             <img src={} className="mastercard" style="color:red;"></img>
//                                             <img src={} className="amex" style="color:orange;"></img>
//                                         </div>
//                                     <label for="cname">name on card</label>
//                                     <input type="text" id="cardName" name="cardname" placeholder="name as it appears on card">
//                                     <label for="ccnum">credit card number</label>
//                                         <div input type="text" id="cardNum" name="cardnumber" placeholder="1111-2222-3333-4444">
//                                             <label for="expmonth">exp month</label>
//                                                 <div input type="text" id="expmonth" name="expmonth" placeholder="September">
//                                                     <div className="row">
//                                                     <div className="col2">
//                                                         <label for="expyear">exp year</label>
//                                                         <input type="text" id="expyear" name="expyear" placeholder="2025">
//                                                     </div>
//                                                     <div className="col2">
//                                                         <label for="cvv">cvv</label>
//                                                         <input type="text" id="cvv" name="cvv" placeholder="352">
//                                                     </div>
//                                                 </div>
//                                         </div>

//                                 </div>
//                                                      <div>   
//                                                         <label>
//                                                             <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
//                                                         </label>

//                                                         <label>
//                                                             <input type="checkbox" checked="checked" name="applyCard"> apply for an Atown surf charge card!
//                                                         </label>

//                                                         <input type="submit" value="Continue to checkout" class="btn">
//                                                         </form>
//                         </div>
//                     </div>
//                     <div className="cartContainer">
//                         <div className="cartList">
//                             <h4>Cart <span className="price" style="color:black"><img src={} className="shoppingCart"></img> <b>4</b></span></h4>
//                                 <p><a href="#">Product 1</a> <span className="price">$15</span></p>
//                                 <p><a href="#">Product 2</a> <span className="price">$5</span></p>
//                                 <p><a href="#">Product 3</a> <span className="price">$8</span></p>
//                                 <p><a href="#">Product 4</a> <span className="price">$2</span></p>
//                                 <hr />
//                                 <p>Total <span className="price" style="color:black"><b>$30</b></span></p>
//                         </div>
//                     </div>
//             </div>
//     )}


//                                         </>
//                                         )
// }

//                                         export default CartModal 
