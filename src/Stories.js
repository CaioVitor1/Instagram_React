
const everyStories = [ 
{imagem:"imagens/9gag.svg", titulo:"9gag"}, {imagem:"imagens/meowed.svg", titulo: "meowed"},
{imagem:"imagens/barked.svg", titulo: "barked"}, {imagem:"imagens/nathanwpylestrangeplanet.svg", titulo: "nathanwpylestrangeplanet"},
{imagem:"imagens/wawawicomics.svg", titulo: "wawawicomics"}, {imagem:"imagens/respondeai.svg", titulo: "respondeai"},
{imagem:"imagens/filomoderna.svg", titulo: "filomoderna"}, {imagem:"imagens/memeriagourmet.svg", titulo: "memeriagourmet"},
]

function RenderStories(props) {
        return (

    <div className="story">
        <div className="imagem">
        <img src={props.image} />
        </div>                                
        <div className="usuario">
          {props.title}
        </div>
    </div>
           
  )       
} 

export default function Stories() {
    return (
    <div className="stories">
    
    {everyStories.map((url) => (<RenderStories image={url.imagem} title={url.titulo}/>))}
    
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}