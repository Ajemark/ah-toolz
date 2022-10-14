
import { PageSEO } from '@/components/SEO'
import { useRef, useState } from 'react'


export default function EmailExtractor() {

    const inputEl = useRef(null)
    const outputEl = useRef(null)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    // const 


    return (
        <>
            <PageSEO title={"Words Counter Online Tool ~ AH-Toolz.com"} description={"Words Counter Online Tool ~ AH-Toolz.com"} />

            <div className="shadow-lg mb-2">
                <div className=" bg-primary-500 mb-2">
                    <div className="p-3 justify">

                        <h3 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9 md:text-2xl md:leading-9">Words Counter Tool</h3>

                        <p>Ajemark Hub Word Counter Tool is at your service. Today, posting in the social media has specific limits that you can go beyond. Also in writing a article, if theres is a minimun of words required, you need to kmow how many words you have gotten, thus the need to use a word counter tool, We are indeed in the age of word counting! Use our Word Counter Tool to assist you all the way.</p>
                    </div>
                </div>

                <form className="flex flex-col sm:flex-row" >
                    <div>
                        <label className="sr-only" htmlFor="email-input">
                            Text
                        </label>
                        <input
                            autoComplete="text"
                            className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                            id="email-input"
                            name="text"
                            // placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
                            ref={inputEl}
                            required
                            type="text"
                        // disabled={subscribed}
                        />
                    </div>
                    <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                        <button
                            className={`w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 
                             
                                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
                            type="submit"
                        // disabled={subscribed}
                        >
                            {'Sign up'}
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
                )}


            </div>


        </>
    )
}
