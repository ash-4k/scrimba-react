import Joke from "./Joke"

const arr = ["Funny", "Hilarious"]

export default function App() {
    return (
        <main>
            <Joke
                punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
                upvotes={5}
                downvotes={2}
                comments={arr}
                isPun={true}
            />

            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                upvotes={12}
                downvotes={1}
                comments={
                    [
                        "Smart one",
                        "Classic 😂"
                    ]
                }
                isPun={true}
            />

            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
                upvotes={7}
                downvotes={3}
                comments={
                    [
                        "Bruh",
                        "Took me a second"
                    ]}
                isPun={false}
            />

            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
                upvotes={9}
                downvotes={2}
                comments={["Cute", "Bee-utiful"]}
                isPun={true}
            />

            <Joke
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
                upvotes={20}
                downvotes={0}
                comments={["Top tier", "Nice one"]}
                isPun={true}
            />
        </main>
    )
}