var tabs = [{
  id: 1,
  name: "Tab 1",
  menus: [{
    display: "Button 1",
    button_class: "btn-default"
  }, {
    display: "Button 2",
    button_class: "btn-primary"
  }, {
    display: "Button 3",
    button_class: "btn-success"
  }]
}, {
  id: 2,
  name: "Tab 2",
  menus: [{
    display: "Button 1",
    button_class: "btn-default"
  }, {
    display: "Button 2",
    button_class: "btn-primary"
  }, {
    display: "Button 3",
    button_class: "btn-success"
  }, {
    display: "Button 4",
    button_class: "btn-info"
  }, {
    display: "Button 5",
    button_class: "btn-warning"
  }]
}, {
  id: 3,
  name: "Tab 3",
  menus: [{
    display: "Button 1",
    button_class: "btn-default"
  }, {
    display: "Button 2",
    button_class: "btn-primary"
  }, {
    display: "Button 3",
    button_class: "btn-danger"
  }]
}]

var Tabs = React.createClass({
  render: function() {
    return(
      <ul className="nav nav-tabs">
      {
        tabs.map(function(tab, i) {
          var isActive = (tab.id == 1) ? "active" : ""
          return(
            <li className={isActive} key={i}>
                <a href={"#" + tab.id} data-toggle="tab">{tab.name}</a>
            </li>
          )
        })
      }
      </ul>
    )
  }
})

var TabPane = React.createClass({
  render: function() {
    var tab = this.props.tab
    console.log(tab)
    var isActive = (tab.id == 1) ? "active" : ""
    return(
      <div className={"tab-pane " + isActive} id={tab.id}>
        {
          tab.menus.map(function(menu, i) {
            console.log(menu, i)
            return(
              <p>
                <button key={i} type="button" className={"btn " + menu.button_class}>{menu.display}</button>
              </p>
            )
          })
        }
      </div>
    )
  }
})

var TabContent = React.createClass({
  render: function() {
    return (
      <div className="tab-content">
      {
        tabs.map(function(tab, i) {
          return (<TabPane key={i} tab={tab} />)
        })
      }
      </div>
    )
  }
})

ReactDOM.render(<Tabs />, document.getElementById('tabs'))
ReactDOM.render(<TabContent />, document.getElementById('tab-content'))
