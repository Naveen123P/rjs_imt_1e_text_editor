import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {TextArea, Button} from './styledComponent'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    text: '',
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  onEnteredText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {isBold, isItalic, isUnderline, text} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="img-div">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="editor-img"
            />
          </div>
          <div className="editors-text-div">
            <ul className="editors-div">
              <li>
                <Button
                  data-testid="bold"
                  isBold={isBold}
                  type="button"
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="italic"
                  isItalic={isItalic}
                  type="button"
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="underline"
                  isUnderline={isUnderline}
                  type="button"
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ul>
            <TextArea
              value={text}
              onChange={this.onEnteredText}
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            >
              {' '}
            </TextArea>
          </div>
        </div>
      </div>
    )
  }
}

export default App
