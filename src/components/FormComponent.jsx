import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FormComponent = ({ apiCall, playerId ,url ,newplayerId}) => {
  const formStyle = { display: "flex", justifyContent: "space-between" };
  // form state variable
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Id, setId] = useState("");
  const [Position, setPostion] = useState("");
  // const[active,setActive] = useState(false);

  // this part of form is for updating form on ediit functionality
  async function getInfoById(playerId) {
    try {
      const request = await fetch(url + playerId);
      const data = await request.json();
      setId(data.id);
      setAge(data.age);
      setName(data.name);
      setPostion(data.position);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    playerId ? getInfoById(playerId) : console.log("Add funcionality was called");
    newplayerId ? setId(newplayerId) : console.log("Edit functionality was called");
  }, []);

  // this does not work when id not given

  const handleSubmit = (e) => {
    console.log("Called")
    e.preventDefault();
    const postData = {
      id: Id,
      name: Name,
      age: Age,
      position: Position,
    };
    apiCall(url,playerId, postData);
    console.log(playerId);
  };
  // console.log(handleSubmit)
  return (
    <div className="flex flex-grow items-center justify-center m-8 md:m-10">
      <form onSubmit={handleSubmit} className="w-full max-w-lg  bg-neutral-200 p-4 md:p-8 rounded">
        <div className="md:flex md:items-center mb-6 justify-center text-xl font-semibold">
            <h2>Enter Player Details</h2>
        </div>
        <>
          <div className="md:flex md:items-center mb-6">
            <div className=" md:w-1/3 ">
              <label
                htmlFor="id"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Enter Id
              </label>
            </div>
            <div className="md:w-2/3 ">
              <input
                
                type="number"
                name="id"
                value={Id}
                min={newplayerId}
                max={100}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                className="bg-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                id="inline-full-name"
              />
            </div>
          </div>
        </>
        <>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="name"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Enter Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                required
                type="text"
                name="name"
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="bg-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                id="inline-full-name"
              />
            </div>
          </div>
        </>
        <>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="age"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                
              >
                Enter Age
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                required
                type="number"
                name="age"
                value={Age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                className="bg-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                id="inline-full-name"
              />
            </div>
          </div>
        </>
        <>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="position"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Enter Position
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                required
                type="text"
                name="position"
                value={Position}
                onChange={(e) => {
                  setPostion(e.target.value);
                }}
                className="bg-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                id="inline-full-name"
              />
            </div>
          </div>
        </>
        
       
        <h2 style={{ justifyContent: "center", gap: "10px", display: "flex" }}>
          <button className="btn btn-success" type="submit">Save </button>
          <Link to="/"><button className="btn btn-error" >
            Cancel
          </button></Link>
        </h2>
      </form>
    </div>
  );
};

export default FormComponent;
