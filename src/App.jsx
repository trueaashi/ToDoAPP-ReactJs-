function App() {
  return (
    <center class="todo-container">
      <h1>ToDo App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter ToDo here"/>
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success">Add</button>
          </div>
          </div>
          <div class="row">
          <div class="col-6">
            Learn React
          </div>
          <div class="col-4">
            08/11/2023
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
          
        </div>
        <div class="row">
          <div class="col-6">
            Learn CSS
          </div>
          <div class="col-4">
            07/11/2023
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
          
        </div>
      </div>
    </center>
  );
}

export default App;
