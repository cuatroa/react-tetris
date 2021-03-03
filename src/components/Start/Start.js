import React from 'react'
import { StyledStart } from './StyledStart'

const Start = ({ callback }) => {
    return (
        <StyledStart onClick={callback}>
            START GAME
        </StyledStart>
    )
}

export default Start
