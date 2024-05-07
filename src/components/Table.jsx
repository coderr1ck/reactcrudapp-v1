import { Link } from "react-router-dom";


const Table = ({playerInfo,onDelteMethod}) => {
  
  return (
    <div className="overflow-x-auto lg:w-[56rem] h-auto w-fit">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 2 */}
          {playerInfo ? playerInfo.length !== 0 ? playerInfo.map((Player,index) =>
                <tr key={index} className="hover">
                    <td>{Player?.id}</td>
                    <td>{Player?.name}</td>
                    <td>{Player?.age}</td>
                    <td>{Player?.position}</td>
                    <td className="flex gap-2 ">
                        <Link to={"/editPlayer/"+Player.id}><button className="btn btn-xs md:btn-sm btn-success ">Edit</button></Link>
                        <button className="btn btn-xs md:btn-sm btn-error "onClick={()=> onDelteMethod(Player.id)}>Delete</button>
                    </td>
                </tr>
                ): <tr><td colSpan={5} style={{textAlign:'center'}}><h1>No records were found !</h1></td></tr>  : <tr><td colSpan={5} style={{textAlign:'center'}}><span className="loading loading-dots loading-md"></span></td></tr>}
            
        </tbody>
      </table>
    </div>
  );
};

export default Table;