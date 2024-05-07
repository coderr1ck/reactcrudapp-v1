import react  from "react";
import {useState , useEffect} from "../../node_modules/react";
import { Link } from "react-router-dom";
import Table from "./Table";
import {URL} from"../../constants.js"
const PlayerDetails = ({}) => {

    const [ playerInfo,setplayerInfo] = useState(null);
    const [active,setactive] = useState(false);
    const [new_ID,setnew_ID] = useState(0);

     
    // {console.log(active)}

    function onDelete(playerID){
            try{
                fetch(URL+playerID, {
                    method: 'DELETE',
                    headers: {
                       'Content-Type': 'application/json',
                    },
                }).then((response)=>{
                    active ? setactive(false) : setactive(true); 
                    console.log("After changes"+active)
                    response.status === 200 ?
                    alert("Deleted Successfully"):alert("An Eroor Occured");
                }).catch((err)=>{
                    console.log(err);
                })
                
            }catch(err){
                console.log(err.message);
                alert("An error Occured")
            }
            
        }
    

    async function getData(){
        try{
            const request = await fetch(URL);
            const data = await request.json();
            setplayerInfo(data)
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        getData();
        console.log(playerInfo,"UseEffect")
    },[active])

    useEffect(()=>{
        playerInfo ? setnew_ID(playerInfo?.length +1) : console.log("playerInfo is null","use Effect of setID");
    },[playerInfo])
    
    console.log(playerInfo,"Body")

    return(
        <>
        <main className="flex flex-grow items-center flex-col w-full  p-8 scroll-smooth ">
            <div className="flex flex-col items-start border-2  rounded">
                <h3 className="text-black bg-[#00935F] md:bg-slate-200 w-full text-center p-4 text-2xl font-semibold">Football Player Details</h3>
                <Table playerInfo={playerInfo} onDelteMethod={onDelete}/> 
            </div>
            <div className="flex flex-col items-end lg:w-[56rem]">
            <Link to={"/addplayer/"+new_ID}><button className="btn-md btn btn-success ">Add (+)</button></Link>
            </div>
        </main>
        </>
    
        
    );
};


export default PlayerDetails;