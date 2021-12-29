import './Page.scss'
import Card from "./Card";


function Page(props){
    return <>
        <Card>
        <h2>{props.title}</h2>
            <img className={"image"} src={props.image} alt={"zdjecie"}/>
            <p>{props.description}</p>

        </Card>
        </>

}

export default Page;