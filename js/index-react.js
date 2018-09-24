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

var Tabs = function() {
  return(
    <ul className="nav nav-tabs">
    {
      tabs.map(function(tab, i) {
        var isActive = (tab.id == 1) ? "active" : ""
        return(
          <li className={"nav-item " + isActive} key={i}>
              <a href={"#" + tab.id} className="nav-link" data-toggle="tab">{tab.name}</a>
          </li>
        )
      })
    }
    </ul>
  )
}

var TabPane = function({ tab }) {
  var isActive = (tab.id == 1) ? "active" : ""
  return(
    <div className={"tab-pane " + isActive} id={tab.id}>
      {
        tab.menus.map(function(menu, i) {
          return(
            <p key={i}>
              <button type="button" className={"btn " + menu.button_class}>{menu.display}</button>
            </p>
          )
        })
      }
    </div>
  )
}

var TabContent = function() {
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

ReactDOM.render(<Tabs />, document.getElementById('tabs'))
ReactDOM.render(<TabContent />, document.getElementById('tab-content'))
