import{Search, UserPlus} from "lucide-react"

const Cards = (props) => {
    console.log(props)

    return (
        <>
            <div className="card bg-white w-full h-auto max-w-sm rounded-xl shadow-2xl my-5 mx-6 py-4 px-6">
                <div className="flex items-start justify-between">
                    <img src={props?.data?.photo} alt="Image" className="w-24 h-24 rounded-full object-cover drop-shadow-2xl" />
                     <div className="icon flex items-center gap-5">
                    <div className="bg-gray-100 inline-block rounded-xl text-center p-2"><Search className="font-bold"/></div>
                    <div className="bg-blue-100 inline-block rounded-xl text-center p-2"><UserPlus className="text-blue-500 font-bold"/></div>
                </div>
            
                </div>

               
                <div className="content pt-2">
                    <h2 className="text-2xl font-bold my-5">{props?.data?.name}</h2>
                    <p className="text-md text-gray-400 font-semibold mb-2">{props?.data?.username}</p>

                    <p className="text-md my-2">{props?.data?.bio}</p>
                </div>

                <div className="other flex justify-between items-center">
                    <p className="text-gray-400">
                        <span className="text-black font-medium">{props?.data?.points} </span> points</p>
                    <p className="text-gray-400">
                        <span className="text-black font-medium">{props?.data?.friends} </span>Friends</p>
                    <p className="text-gray-400">Joined At {props?.data?.joinedAt}</p>
                </div>
            </div>
        </>

    )
}

export default Cards
