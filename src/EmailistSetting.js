import React from 'react'
import '../src/css/Emailist.css';
import { IconButton } from "@mui/material"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function EmailistSetting () {
  return (
    <div className='emailist__settings'>
        <div className='emailist__settingsLeft'>
            <IconButton>
                <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
            <IconButton>
                <RefreshIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
        <div className='emailist__settingsRight'>
            <p>1-50</p>
            <IconButton>
                <ChevronLeftIcon/>
            </IconButton>
            <IconButton>
                <ChevronRightIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default EmailistSetting