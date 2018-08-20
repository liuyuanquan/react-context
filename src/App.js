import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    const { theme, children } = this.props 
    return (
      <header className={theme}>
        { children }
      </header>
    )
  }
}

class ThemeHeader extends Component {
  render() {
    const { theme, children } = this.props 
    return (
      <Header theme={theme}>
        { children }
      </Header>
    )
  }
}

class Aside extends Component {
  render() {
    const { theme, children } = this.props
    return (
      <aside className={theme}>
        { children }
      </aside>
    )
  }
}

class ThemeAside extends Component {
  render() {
    const { theme, children } = this.props 
    return (
      <Aside theme={theme}>
        { children }
      </Aside>
    )
  }
}

class Main extends Component {
  render() {
    const { theme, children } = this.props
    return (
      <main className={theme}>
        { children }
      </main>
    )
  }
}

class ThemeMain extends Component {
  render() {
    const { theme, children } = this.props 
    return (
      <Main theme={theme}>
        { children }
      </Main>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'none' // dark light none
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      theme: e.currentTarget.value
    })
  }
  render() {
    const { theme } = this.state
    const { handleChange } = this
    return (
      <React.Fragment>
        <ThemeHeader theme={theme}>
          <label for='theme'>切换主题：</label>
          <select name='theme' value={theme} onChange={handleChange}>
            <option value='dark'>dark</option>
            <option value='light'>light</option>
            <option value='none'>none</option>
          </select>
        </ThemeHeader>
        <ThemeAside theme={theme}>侧边栏</ThemeAside>
        <ThemeMain theme={theme}>主体</ThemeMain>
      </React.Fragment>
    )
  }
}

export default App;
