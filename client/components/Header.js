import React from 'react'

let styles = {
  container: {
    position: 'relative',
    borderBottom: '1px solid black',
    webkitBoxShadow: '0 2px 15px black',
    boxShadow: '0 2px 15px #5B1F69',
    backgroundPosition: '0 -5px',
    padding: '15px 20px 15px 20px',
    backgroundColor:'#E0E1DD',
    backgroundColor: '#565a5c',
    color: '#fff',
  }
}
class Header extends React.Component {
  render () {
    return (
      <div style={styles.container} className="clearfix header-large text-center">
        <h1>Mitie Header</h1>
        <p>This is actually a pattern right here. Its the
        <code>.header-large</code> pattern. The header above is a design pattern too, which contains some others, like dropdown menus. Also, all the patterns below are in a
        <code>.module</code>.
        </p>
      </div>
    )
  }
};

export default Header;
