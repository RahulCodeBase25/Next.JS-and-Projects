import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div className='flex items-center justify-around '>
      <Script>
        {`alert("Welcome yo my desi contact's😋");`}
      </Script>
      I will not give you my contact details....😋😋
    </div>
  )
}

export default contact
export const metadata = {
  title: "Desi Contact💪",
  description: "This is contact section of this shitty facebook",
};
