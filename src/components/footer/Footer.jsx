const Footer = () => {
    return (
      <div style={{ marginTop: '10rem' }}>
        {/* //create a navigation bar with a dark background // */}
        <nav className="justify-content-center bg-dark p-4 fixed-bottom">
          {/* //display the copyright notice with the current year // */}
          <p className="text-light text-center">
            Copyright {new Date().getFullYear()}
          </p>
        </nav>
      </div>
    )
  }
  
  export default Footer
  