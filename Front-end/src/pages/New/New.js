import ShowNewForm from "../../components/ShowNewForm/ShowNewForm.js";
import "./New.css"

function New() {
  return (
    <div className="New">
      <h1 className="New__header">Add New Show</h1>
      <ShowNewForm />
    </div>
  );
}

export default New;