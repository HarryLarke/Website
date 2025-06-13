import { useState } from "react"

const ContactMe = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage  ] = useState('')

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}
    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {setMessage(e.target.value)}

    const canSend = [name, email, message].every(Boolean)

    const handleSubmit = async() => {
        if(canSend) {
            try{
                console.log(`Sending Message: ${message}`)
                setName('')
                setEmail('')
                setMessage('')
            } catch(err) {
                console.error(err)
            }
        }
    }

    return(
        <>
            <section>
                <h2>Contact Me</h2>
                <p>If you are interested in working with me, whether that be freelance or fulltime employee.</p>
                <p>Or maybe you just have some questions.</p>
                <p>Feel free to reach out to me, via the contact form below:</p>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        id="name"
                        required
                        placeholder="name here..." 
                        value={name}
                        onChange={onNameChange}
                        />
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        id="email"
                        required
                        placeholder="email here..."
                        value={email}
                        onChange={onEmailChange}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        required
                        placeholder="Your message..."
                        cols={30}
                        rows={4}
                        value={message}
                        onChange={onMessageChange}
                        />
                    
                    <button type="submit"
                    onClick={handleSubmit}
                    disabled={!canSend}
                    >Send</button>
                </form>
            </section>
        </>
    )
}

export default ContactMe