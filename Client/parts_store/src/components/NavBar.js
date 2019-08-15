import React from 'react';
import { List, Segment, Input, Image } from 'semantic-ui-react'
import '../assets/NavBar.css'
import logo from '../assets/parts_pricing_icon.png'

export default function NavBar () {
                // <List.Item className='listItem'><a className='nav-a' href="#news">News</a></List.Item>  New button 
    return(
        <Segment>
            <List className='list'>
                <List.Item className='listItem home'>
                        <a className="active nav-a" href="/">
                            <Image src={logo} size='small'/>
                        </a>
                    </List.Item>
                <List.Item className='listItem'>
                    <Segment className='searchDiv'>
                        <Input action='Search' placholder='Search...'/>
                    </Segment>
                </List.Item>
            </List>
        </Segment> 
    )
}
