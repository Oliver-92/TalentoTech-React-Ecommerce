import ecommerce from '../assets/ecommerce.jpg';

function Main() {
    return (<main style={{ padding: "30px", backgroundImage: `url(${ecommerce})`, backgroundSize: "cover", flex: 1  }}>
        <h2 style={{ color: "white", fontSize: "60px", textAlign: "center", textShadow: "2px 2px 2px black", fontFamily: "sans-serif", marginTop: "100px"}} >Envíos a todo el país</h2>

    </main>);
}
export default Main;