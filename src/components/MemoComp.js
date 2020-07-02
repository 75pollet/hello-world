import React from 'react'

function MemoComp({name}) {
    console.log('****************render MEMO component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
