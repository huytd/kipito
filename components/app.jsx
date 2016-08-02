import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    var self = this
    self.setState({ menu: !self.state.menu });
    console.log(this.state.menu);
  }

  render() {
    var self = this;
    var sideBarClass = 'sidebar ' + ((self.state.menu) ? 'show' : '');
    console.log('class: ', sideBarClass);
    return (
        <div className="container">
          <div className={sideBarClass}></div>
          <div className="editor">
            <div className="header">
              <a className="menu-btn" onClick={self.toggleMenu}><i>≡</i> Menu</a>
            </div>
            <div className="content">
              <div className="edit-zone">
                <h1>Text title here</h1>
                <p>It's awesome!!!</p>
              </div>
            </div>
          </div>  
        </div>
        )
  }
}

export default App
