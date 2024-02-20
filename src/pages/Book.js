
function Book({data}){
    return(
        <div className="book justify-center">
            <div className="h-10 items-center time"> {data.time}</div>
            
            <div className="remain ">
                <div className="price2">
                <div className="price"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 40" fill="none">
                    <path d="M17.4792 39.2081L2.3479 24.0414V19.7081H10.2229C12.2104 19.7081 13.926 19.0852 15.3698 17.8393C16.8135 16.5935 17.6854 15.0497 17.9854 13.2081H0.0979004V8.87474H17.3104C16.6729 7.61085 15.726 6.57265 14.4698 5.76015C13.2135 4.94765 11.7979 4.5414 10.2229 4.5414H0.0979004V0.208069H27.0979V4.5414H19.7854C20.3104 5.15529 20.7792 5.82335 21.1917 6.54557C21.6042 7.26779 21.9229 8.04418 22.1479 8.87474H27.0979V13.2081H22.5416C22.2416 16.2775 20.9291 18.8504 18.6042 20.9268C16.2792 23.0032 13.4854 24.0414 10.2229 24.0414H8.59165L23.7229 39.2081H17.4792Z" fill="black"/>
                </svg>
                {data.price}
                </div>
                </div>
            <div className="condition p-10">
                <div >{data.condition1}</div>
                <div >{data.condition2}</div>
            </div>
            <div className="booknow2"><button className="booknow">Book Now</button></div>
            </div>
        </div>
    );
}

export default Book;