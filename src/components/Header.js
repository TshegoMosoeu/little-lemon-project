import React from 'react';
import { Link } from 'wouter'; // ✅ Use Wouter's Link
import bannerImg from '../images/restauranfood.jpg';

const Header = () => {
  return (
    <header className='header'>
      <section>
        {/* banner texts */}
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          {/* Use href instead of to */}
          <Link href="/booking">
            <button aria-label="Reserve Table">Reserve Table</button>
          </Link>
        </div>

        {/* banner image */}
        <div className='banner-img'>
          <img src={bannerImg} alt="Restaurant food" />
        </div>
      </section>
    </header>
  );
};

export default Header;
