const everysuggestion = [
    {image:"imagens/bad.vibes.memes.svg", title: "bad.vibes.memes"},
    {image:"imagens/chibirdart.svg", title: "chibirdart"},
    {image:"imagens/razoesparaacreditar.svg", title: "razõesparaacreditar"},
    {image:"imagens/adorable_animals.svg", title: "adorableanimals"},
    {image:"imagens/smallcutecats.svg", title: "smallcutecats"}
]
function User(props) {
    return (
        <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <strong>{props.user}</strong>
                    {props.title}
                </div>
            </div>
    )
}
function Suggestion(props) {
    return ( 
    <div class="sugestao">
        <div class="usuario">
             <img src={props.image} />
            <div class="texto">
                <div class="nome">{props.title}</div>
                <div class="razao">Segue você</div>
            </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
    )
}

export default function Sidebar() {
    return (
        <div class="sidebar">
             <User image="imagens/catanacomics.svg" user="Catana" title="Catanacomics" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                
                {everysuggestion.map((url) => (<Suggestion image={url.image} title={url.title}/>))}
                
            </div>

            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
      </div>
    )
}