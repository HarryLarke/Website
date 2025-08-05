import api from "../api/api"
import { isAxiosError } from "axios"
import { useState, type FormEvent } from "react"

const ContactMe = () => {
    
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('Say Hello!')
    const [ message, setMessage  ] = useState('')
    const [ watcher, setWatcher ] = useState('') //to check/stop bots!
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ errorStatus, setErrorStatus ] = useState("")

    const [ hideForm, setHideForm ] = useState(false)
    const [ expandForm, setExpandForm ] = useState(false)
    const [ isSending, setIsSending ] = useState(false) 
    const [ isSent, setIsSent ] = useState(false)
    const [ showError, setShowError ] = useState(false)  
    

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}
    const onSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {setSubject(e.target.value)}
    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {setMessage(e.target.value)}
    const onWatcherChange = (e: React.ChangeEvent<HTMLInputElement>) => {setWatcher(e.target.value)}

    const canSend = [name, email, message, !watcher, !isSending].every(Boolean)

    const progress = [name, email, message].filter(value => value.trim() !== "").length
    console.log(progress)

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(canSend) {
            setIsSending(true)
            try{
                const response = await api.post('/contact', JSON.stringify({email: email, name: name, subject: subject, message: message}), 
            {headers: {'Content-Type': 'application/json'}})
                if(response){ 
                    setIsSent(true)
                    setName('')
                    setEmail('')
                    setSubject('')
                    setMessage('') }
            } catch(err: unknown) { 
                setShowError(true)
                setIsSent(false)
                if(isAxiosError(err)) {
                    setErrorMessage(err?.message)
                    setErrorStatus(JSON.stringify(err?.status))
                    console.error(err)
                }   
                 
                 console.error(err)
                 setErrorMessage(JSON.stringify(err))
            }
        }
    }

    return(
        <main className="Main">

            {isSending ?
                <section className="overlay">

                    {isSent ? 
                        <div className="popup-confirmation">
                            <div className="top">
                                <p className="tabtitle">Yay!</p>
                                <button className="top-buttons red"
                                onClick={() => setIsSending(false)}
                                >X</button>
                            </div>
                    
                            <article className="art-one">
                                <h3>Message Sent</h3>
                                <p>Thanks you for reaching out.</p>
                                <p>A confirmation email should have been sent.</p>
                                <p>I look forward to getting back to you very soon!</p>
                            </article>
                                <div className="ok-container">
                                <button className="button-ok"
                                onClick={() => setIsSending(false)}
                                >OK</button>
                                </div>
                        </div>
                        : <></> 
                    && showError ?  
                        <div className="popup-confirmation">
                            <div className="top">
                                <p className="tabtitle">Error</p>
                                <button className="top-buttons red"
                                onClick={() => {setIsSending(false)
                                        setErrorMessage('')
                                        setErrorStatus('')}
                                }
                                >X</button>
                            </div>
                    
                            <article className="art-one">
                                <h3 className="title-three font-red">Error: ${errorStatus}</h3>
                                <p>Sorry it appear we have an error.</p>
                                <p>${errorMessage}</p>
                            </article>
                                <div className="ok-container">
                                <button className="button-ok"
                                onClick={() => {setIsSending(false)
                                        setErrorMessage('')
                                        setErrorStatus('')}}
                                >OK</button>
                                </div>
                        </div> : <></>
                    }
                    
                </section> : <></>
            }

            <h2 className="title-two">Contact Me</h2>

            <section className="bubble">
                <p>If you are interested in working with me, whether that be as a freelance or fulltime employee.</p>
                <p>Or maybe you just have some questions. Feel free to reach out to me, via the contact form!</p>

            </section>

            <section>
                <h3>Your Form Progress..</h3>
                <div className="bar">
                    <div className={`barfiller ${progress === 1 ? "quarter" : ''} ${progress === 2 ? "half" : ""} ${progress === 3 ? "full" : ""}`}>

                    </div>
                </div>
            </section>

            <section className={`formOne ${hideForm ? "hide" : ""} ${expandForm ? "expand" : ""}`}>  
                <div className="top">
                    <p className="tabtitle">Contact Form</p>
                    <button className="top-buttons"
                    onClick={() => setHideForm(prev => !prev)}
                    >_</button>
                    <button className="top-buttons"
                    onClick={() => setExpandForm(prev => !prev)}
                    >0</button>
                </div>

                <form className="contact-form"
                onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        id="name"
                        required
                        value={name}
                        onChange={onNameChange}
                        placeholder="Your name here..."
                        />
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        id="email"
                        required
                        value={email}
                        onChange={onEmailChange}
                        placeholder="Your email here..."
                    />
                    <label htmlFor="reason">Reason you are reaching out:</label>
                    <select className="selectBar" name="reason" id="reason"
                    onChange={onSubjectChange} value={subject}>
                        <option>Say Hello!</option>
                        <option>Freelance work</option>
                        <option>Curiousity</option>
                        <option>Feedback</option>
                        <option>Looking for an employee</option>
                        <option>Other</option>
                    </select>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        required
                        cols={30}
                        rows={4}
                        value={message}
                        onChange={onMessageChange}
                        placeholder="Your message here..."
                        />
                    <label className='offscreen' htmlFor="watcher">Watcher</label>
                    <input className="offscreen" type="text" id="watcher" value={watcher} onChange={onWatcherChange}/>
                    <button className="send-button"
                    type="submit"
                    disabled={!canSend}
                    >Send</button>
                </form>
            </section>


        </main>
    )
}
//WIll need to add reasons for reach to my inputs
//Anti-bot input with canSave!!!
export default ContactMe