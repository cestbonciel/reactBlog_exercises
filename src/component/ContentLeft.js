// import './soundcloud-brands.svg'
export default function conLeft(){
    const name = "Music";
     const spoti = {
       name: "Spotify",
       url:"https://spotify.com/",
     };
    return <section style={{
        width:"490px",
        height:"500px",
        backgroundColor:"#9BF0E1",
        lineHeight:"150px",
    }}>
        <p className="clef_tit">Do you like listening {name} ?</p>
        <a href={spoti.url} style={{display:"block",
        marginBottom:"10px",
        textDecoration:"none",
        color:"#2941AB",
        fontWeight:"bold",
        fontSize:"30px",
        }}>{spoti.name}</a>
        
    </section>
}