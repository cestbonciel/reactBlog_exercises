

export default function contentRight(){
    // const anoName = "soundCloud";
    const sCloud ={
        name: "soundCloud",
        url:"https://soundcloud.com/",
    };
    return <section className="cntRight" style={{
            width:"490px",
            height:"500px",
            lineHeight:"500px",
            backgroundColor:"#9BF0E1",
            marginLeft:"10px",
    }}>
    <img src="./music.jpg" alt="" style={{
        width:"100%",
        height:"100%",
    }}/>
    <span className="sLink"><a href={sCloud.url}>{sCloud.name}</a></span>
    </section>
}