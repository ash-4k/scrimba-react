import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState([])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */
    return (
        <div>
            {!messages.length ?
                (<h1>You're all caught up!</h1>) :
                (<h1>You have {messages.length} unread message{messages.length > 1 ? 's' : null}
                </h1>
                )
            }
        </div>
    )
}
