import React from 'react'
import Welcome from './Welcome'

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Khaw</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Khaw')
    )
}

export default Welcome