import Card from './Card';
function Availveh(){
    const datas=[
        {
            id:'1',
            name:'Ather 1',
            img:'https://s3-alpha-sig.figma.com/img/3975/c823/adb6d9a5b412dc98f4b59afd6a477541?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvBV3QEG0eQp4C6aY3Z22epPZDGherU-SKo2Saqkk7ZfRQPBtozbNJ4nXt63ttahZRrSkC0NeUQ5eCJmc8cOZu3FdtsSx~lFgTf8Vc-1xF0Hr~RCo4Nsdm1-sbFE~EaYyThg9LS6osZoBYzQkVuNXV2ko6eHAHyrHuEew7SkcNjakK5Vv4Ricbcsn8Chwdc2N70FXQW6BV5FOry11DZrPaG7HCT4ul4QMATI8HSfd5luwM5DMX0wdwoCI0DIBQgFYUX6eI8cqrWWcvfRnJzSlNvAsAygcmuQtyoeP4NeAhc9AdmuE9kW8khA8IcdVUyBc8LqdNnpDhfSPWv30xLdLQ__',
            milege:'69',
            rent:'6000'
        },
        {
            id:'2',
            name:'Ather 2',
            img:'https://s3-alpha-sig.figma.com/img/3975/c823/adb6d9a5b412dc98f4b59afd6a477541?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvBV3QEG0eQp4C6aY3Z22epPZDGherU-SKo2Saqkk7ZfRQPBtozbNJ4nXt63ttahZRrSkC0NeUQ5eCJmc8cOZu3FdtsSx~lFgTf8Vc-1xF0Hr~RCo4Nsdm1-sbFE~EaYyThg9LS6osZoBYzQkVuNXV2ko6eHAHyrHuEew7SkcNjakK5Vv4Ricbcsn8Chwdc2N70FXQW6BV5FOry11DZrPaG7HCT4ul4QMATI8HSfd5luwM5DMX0wdwoCI0DIBQgFYUX6eI8cqrWWcvfRnJzSlNvAsAygcmuQtyoeP4NeAhc9AdmuE9kW8khA8IcdVUyBc8LqdNnpDhfSPWv30xLdLQ__',
            milege:'72',
            rent:'6500'
        }
    ]

    
    return(
        <div>
        <div className="text-white text-center justify-center flex">
            <h3 className="menu underline">Available Vehicles</h3>
        </div>
        {datas.map(data=>(
                <Card key={data.id} data={data}/>
            ))}
        </div>
    );
}

export default Availveh;