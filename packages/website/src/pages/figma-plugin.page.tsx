import React from 'react'

// const FigmaPlugin: any = dynamic(
//   () =>
//     import('https://framer.com/m/Figma-Plugin-SHx3.js@p9qZXYWKOC9yGrtPTT2s'),
//   { ssr: false }
// )

// import dynamic from 'next/dynamic'

import FigmaPlugin from 'https://framer.com/m/TestButton-t1OQ.js@KlEnL8eAQ7iaFMcsVKqV'

const DOM = () => {
  // useEffect(() => {
  //   window.React = React
  // }, [])

  return <FigmaPlugin style={{ width: '100%', height: '100%' }} />
}

const Page = () => {
  return (
    <>
      <DOM />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Shader Gradient ─ Figma Plugin',
    },
  }
}
