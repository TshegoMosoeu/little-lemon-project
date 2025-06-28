import React from "react";

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week's specials!</h2>
                <button>Order Menu</button>
            {/* Menu Cards */}
            <div className="cards">
                <div key="1" className="menu-items">
                    <img src="greek salad.jpg" alt="Greek Salad" />
                    <div className="menu-content"> 
                        <div className="heading">
                            <h5>Greek Salad</h5>
                            <p>$12.99</p>
                        </div>
                        <p>Freshly prepared Greek salad with feta cheese, olives, and a drizzle of olive oil.</p>
                        <button className="orderBtn">Order Now</button>
                    </div>
                </div>
                <div key="2" className="menu-items">
                    <img src="bruschetta.svg" alt="Bruschetta" />
                    <div className="menu-content">
                        <div className="heading">
                            <h5>Bruschetta</h5>
                            <p>$8.99</p>
                        </div>
                        <p>Toasted bread topped with fresh tomatoes, basil, and balsamic glaze.</p>
                        <button className="orderBtn">Order Now</button>
                    </div>
                </div>
                <div key="3" className="menu-items">
                    <img src="lemon dessert.jpg" alt="Lemon Tart" />
                    <div className="menu-content">
                        <div className="heading">
                            <h5>Lemon Tart</h5>
                            <p>$6.99</p>
                        </div>
                        <p>A refreshing lemon tart with a buttery crust and a hint of mint.</p>
                        <button className="orderBtn">Order Now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Menu;