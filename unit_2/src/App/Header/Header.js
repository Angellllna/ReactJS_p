import React from 'react';
import Nav from './Nav';

function Header({site}){
    return(
        <header>
       <h1>{site.site_name}</h1>
       <h2>{site.site_title}</h2>
       <nav>
        <ul>
            {site.nav.map((item, index) => (
            <li key={index}>
             <a href={item.link}>{item.text}</a>
            </li>
        ))}
        </ul>
       </nav>
        </header>
    )
}

export default Header;

