export default function Joke(props) {
    console.log(props.comments)
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            {props.upvotes && <span>Upvotes : {props.upvotes}</span>}
            <br></br>
            {props.downvotes && <span>Downvotes : {props.downvotes}</span>}
            {/* {props.comments &&
                (props.comments).forEach((comment) => {
                    <p>{comment}</p>
                })
            }
            
            forEach doesn't work
            */}
            <hr />
        </>
    )
}