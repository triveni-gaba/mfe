import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingHome'

export default () => {
    const ref = useRef(null)

    useEffect = (() => {
        console.log('Inside useEffect')
        console.log(mount)
        mount(ref.current)
    })

    return <div ref={ref} />
}