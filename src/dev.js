import './dev.scss';

import ReactRadioGroup from './main';
import {ReactSelectedItem} from 'react-selected-items';

class App extends React.Component {
  state = {
    items: [
      {
        val: 1,
        text: '选项1'
      }, {
        val: 2,
        disabled: true,
        text: '选项2'
      }, {
        val: 3,
        text: '选项3',
        selected: true,
      }, {
        val: 4,
        text: '选项4'
      }, {
        val: 5,
        text: '选项5'
      }
    ]
  };

  _template(item,iconEl){
    console.log(item);
    return (
      <div className="item" data-ss={item.selected}>
        {item.text}->{String(item.selected)} <i className="abc">[X]</i> {iconEl}
      </div>
    )
  }

  _change(inEvent) {
    // console.log(inEvent.target.value);
    this.setState({items:inEvent.target.value.slice(0)})
  }

  render() {
    return (
      <div className="hello-react-radio-group">
        <ReactRadioGroup items={this.state.items} template={this._template.bind(this)}
                         onChange={this._change.bind(this)}/>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
