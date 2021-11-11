import logo from './logo.svg';
import './App.css';
// Import logo image and css styling

//Create component called app with props as a parameter
function App(props) {
  // return html code to be rendered in app.test.js
  return (
    // Div that encapsulates entire html code in react className is correct syntax instead of class
    <div className="todoapp stack-large">
      {/*heading/ name of app TodoMatic*/}
      <h1>TodoMatic</h1>
      {/*Create form to add tasks*/}
      <form>
        <h2 className="label-wrapper">
          {/*Label for input*/}
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        {/*Input box for user*/}
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        {/*Button to add user input as a task doesn't do anything at the moment*/}
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      {/*Div for toggling [all, active, completed] tasks displayed*/}
      <div className="filters btn-group stack-exception">
        {/*Button to display all tasks*/}
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        {/*Button to display active tasks*/}
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        {/*Button to display completed tasks*/}
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      {/*Heading listing "number of tasks uncompleted"*/}
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      {/*List displaying the tasks*/}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/*Tasks to do*/}
        <li className="todo stack-small">
          <div className="c-cb">
            {/*Checkbox for if a tasks is completed or not*/}
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            {/*Label for what the task is*/}
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            {/*Edit button to modify tasks*/}
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            {/*Delete button to remove tasks*/}
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            {/*Checkbox for if a tasks is completed or not*/}
            <input id="todo-1" type="checkbox" />
             {/*Label for what the task is*/}
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
             {/*Edit button to modify tasks*/}
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            {/*Delete button to remove tasks*/}
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            {/*Checkbox for if a tasks is completed or not*/}
            <input id="todo-2" type="checkbox" />
             {/*Label for what the task is*/}
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
             {/*Edit button to modify tasks*/}
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            {/*Delete button to remove tasks*/}
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

// Export app component
export default App;
