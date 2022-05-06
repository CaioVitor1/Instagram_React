

function Icones(props) {
    return (
        <div>
            <ion-icon name={props.name}></ion-icon>
         </div>
    )
}

export default function Header() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src="imagens/logo.png"/>
                </div>

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>
    
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
    
            <div className="icones">
                <Icones name="paper-plane-outline" />
                <Icones name="compass-outline" />
                <Icones name="heart-outline" />
                <Icones name="person-outline" />
            </div>

            <div className="icones-mobile">
                <Icones name="paper-plane-outline" />
            </div>
            </div>
      </div>
    )
}