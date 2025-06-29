import React from "react";
import greekSalad from '../images/greek salad.jpg';
import bruschetta from '../images/bruschetta-17-1200.jpg';
import lemonDessert from '../images/lemon dessert.jpg';
import Swal from 'sweetalert2';

const Menu = () => {

    const handleOrder = (itemName) => {

        
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, order it!"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Ordered!",
            text: "Your order has been confirmed!.",
            icon: "success"
            });
        }
        });
    };

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week's specials!</h2>
                <button>Order Menu</button>
              
                <div className="cards">
                    <div key="1" className="menu-items">
                        <img src={greekSalad} alt="Greek Salad" />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>Greek Salad</h5>
                                <p>$12.99</p>
                            </div>
                            <p>Freshly prepared Greek salad with feta cheese, olives, and a drizzle of olive oil.</p>
                            <button
                                className="orderbtn"
                                onClick={() => handleOrder("Greek Salad")}
                                aria-label="Order Greek Salad"
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div key="2" className="menu-items">
                        <img src={bruschetta} alt="Bruschetta" />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>Bruschetta</h5>
                                <p>$8.99</p>
                            </div>
                            <p>Toasted bread topped with fresh tomatoes, basil, and balsamic glaze.</p>
                            <button
                                className="orderbtn"
                                onClick={() => handleOrder("Bruschetta")}
                                aria-label="Order Bruschetta"
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div key="3" className="menu-items">
                        <img src={lemonDessert} alt="Lemon Tart" />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>Lemon Tart</h5>
                                <p>$6.99</p>
                            </div>
                            <p>A refreshing lemon tart with a buttery crust and a hint of mint.</p>
                            <button
                                className="orderbtn"
                                onClick={() => handleOrder("Lemon Tart")}
                                aria-label="Order Lemon Tart"
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
