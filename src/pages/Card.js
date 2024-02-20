function Card({data}){
    return(
        <div>
        <div className="p-2 m-3 bg-black rounded-xl">
            <div className="flex border-b border-gray-500 items-center">
                <div className="w-1/2 pb-1"><img className="avail-img" src={data.img}/></div>
                <div className="w-1/2  text-xl dash text-center justify-center">{data.name}</div>
            </div>
            
            <div className="data flex">
                <div className="w-1/2 text-center justify-center"> Milege :<br/> {data.milege}</div>
                <div className="w-1/2 text-center justify-center"> Rent per hour : <br/>{data.rent}</div>
            </div>
        </div>
        </div>
    );
}

export default Card;