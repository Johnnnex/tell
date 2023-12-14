import React from 'react'
import Head from 'next/head'

const HeadComp = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tell the goodnews" />
        <meta name="keyword" content="church, gospel, the word, Tell, kephaletell" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://kephaletell.com/" />
        <meta name="twitter:title" content="Tell" />
        <meta name="twitter:description" content="Tell the goodnews" />
        {/* <meta name="twitter:image" content="https://https://kephaletell.com//images/open-graph-img.jpeg" /> */}
        <meta property="og:title" content="Tell" />
        <meta property="og:url" content="https://https://kephaletell.com/" />
        {/* <meta property="og:image" content="https://https://kephaletell.com//images/open-graph-img.jpeg" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Tell the goodnews" />
        <meta property="og:site_name" content="Tell" />
        <link rel="icon" href="/loooogo.ico" />
    </Head>
  )
}

export default HeadComp