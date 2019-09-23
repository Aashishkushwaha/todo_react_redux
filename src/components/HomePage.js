import React, { Component } from "react";

// design -- https://cdn.dribbble.com/users/3718850/screenshots/6635602/todo_list_app.jpg

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div className="header">
          <div className="hamburger-box">
            <i
              onClick={this.props.sideDrawerHandler}
              className="material-icons hemburger-box--icon"
            >
              sort
            </i>
          </div>
          <h2 className="header__logo-box">
            <span>Todo List</span>
          </h2>
        </div>
        <main>
          <div className="todos__container">
            {this.props.todoItems.map((todoItem, index) => {
              return (
                <div className="todo-item-box" key={todoItem.id}>
                  <div className="checkbox-div">
                    {/* <input type="radio" /> */}
                    {todoItem.completed ? (
                      <span
                        onClick={() => this.props.completeItem(index)}
                        className="virtual-radio-button"
                      >
                        &nbsp;
                      </span>
                    ) : (
                      <span
                        onClick={() => this.props.completeItem(index)}
                        className="virtual-radio-button-invisible"
                      >
                        &nbsp;
                      </span>
                    )}
                  </div>
                  <div className="todo-item-details-div">
                    <div className="time-date-details">
                      <p>{todoItem.date}</p>
                      <p>{todoItem.time}</p>
                    </div>
                    <h1>{todoItem.desc}</h1>
                    <div className="category-place-details">
                      <p>{todoItem.category}</p>
                      <p>{todoItem.place ? todoItem.place : "N/A"}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="add-item-box">
            <i
              onClick={this.props.addItemHandler}
              className="material-icons add-item--icon"
            >
              add
            </i>
          </div>
        </main>
      </div>
    );
  }
}

export default HomePage;