import Page from "./Page";

function PageList(props){
    return <>
        <h1>Popular web browsers</h1>
        {props.items.map((items) => <Page
            key={items.title}
                title = {items.title}
                image={items.image}
                description = {items.description}
            />
        )}
    </>
}

export default PageList;