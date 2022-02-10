import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className=" swipeButtons_repeat SizeofButtons">
                <ReplayIcon/>
            </IconButton>
            <IconButton className="swipeButtons_left SizeofButtons">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_star SizeofButtons">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_right SizeofButtons">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_lightning SizeofButtons">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
