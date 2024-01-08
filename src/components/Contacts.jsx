import React from 'react'

const Contacts = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_nav">
          <form className="hero_nav_form">
            <input
              type="search"
              className="hero_nav_form_search"
              placeholder="Search..."
              id="search"
            />
          </form>
          <button className="hero_nav_app">Contacts App</button>
        </div>
      </div>
    </>
  );
}

export default Contacts