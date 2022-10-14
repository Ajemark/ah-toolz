import React, { useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const Disqus = ({ frontMatter }) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true)

  const COMMENTS_ID = 'disqus_thread'

  async function LoadComments() {
    setEnabledLoadComments(false)


    window.disqus_config = function () {
      this.page.url = window.location.href
      this.page.identifier = frontMatter.slug
    }
    if (window.DISQUS === undefined) {
      const script = document.createElement('script')
      script.src = 'https://' + siteMetadata.comment.disqusConfig.shortname + '.disqus.com/embed.js'
      script.setAttribute('data-timestamp', +new Date())
      script.async = true
      document.body.appendChild(script)
    } else {
      window.DISQUS.reset({ reload: true })
    }
  }

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      {<button onClick={LoadComments}>Load Comments</button>}
<p>{process.env.NEXT_PUBLIC_DISQUS_URL}{process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}</p>
      <div className="disqus-frame" id={COMMENTS_ID} />


    </div>
  )
}

export default Disqus
