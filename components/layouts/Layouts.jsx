import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const Layouts = ({children}) => {
    return (
        <Fragment>
            <Head>
            <html lang="es"/>
                <title>Home</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==' crossorigin='anonymous'/>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.css' integrity='sha512-Mg1KlCCytTmTBaDGnima6U63W48qG1y/PnRdYNj3nPQh3H6PVumcrKViACYJy58uQexRUrBqoADGz2p4CdmvYQ==' crossorigin='anonymous'/>
                <link rel='stylesheet' href="/static/css/app.css"/>
            </Head>
            <Header/>
            <main>
                { children }
            </main>
        
        </Fragment>
    )
}

export default Layouts
