import React from 'react'
import './Neofetch.css'
import Cyan from '../Cyan/Cyan'
const Neofetch = (props) =>{

    if(props.show){
        return(
            <div className="neofetch">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 26" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"/>
                </svg>
                <ul className="neofetchList">
                <li><Cyan text="_ubben"/>@<Cyan text="codepen"/></li>
                    <li>-----------------</li>
                    <li><Cyan text="OS"/>: A Linux based system</li>
                    <li><Cyan text="Host"/>: MSDEUS.SITE</li>
                    <li><Cyan text="Kernel"/>: 4.20.69-nice</li>
                    <li><Cyan text="Uptime"/>: 7 days, 10 hours, 15 mins</li>
                    <li><Cyan text="Packages"/>: 22</li>
                    <li><Cyan text="Shell"/>: bash 5.0.3</li>
                    <li><Cyan text="Resolution"/>: SMALLxSMALL</li>
                    <li><Cyan text="Terminal"/>: molin</li>
                    <li><Cyan text="CPU"/>: Intel i5-7300HQ (4) @ 3.50GHz</li>
                    <li><Cyan text="GPU"/>: Nvidia Geforce GTX 1050</li>
                    <li><Cyan text="Memory"/>: 8192MiB / 4096MiB</li>
                </ul>
            </div>
        )
    } else{
        return(
            <div className="neofetchHidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 26" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"/>
                </svg>
                <ul className="neofetchList">
                <li><Cyan text="_ubben"/>@<Cyan text="codepen"/></li>
                    <li>-----------------</li>
                    <li><Cyan text="OS"/>: A Linux based system</li>
                    <li><Cyan text="Host"/>: MSDEUS.SITE</li>
                    <li><Cyan text="Kernel"/>: 4.20.69-nice</li>
                    <li><Cyan text="Uptime"/>: 7 days, 10 hours, 15 mins</li>
                    <li><Cyan text="Packages"/>: 22</li>
                    <li><Cyan text="Shell"/>: bash 5.0.3</li>
                    <li><Cyan text="Resolution"/>: SMALLxSMALL</li>
                    <li><Cyan text="Terminal"/>: molin</li>
                    <li><Cyan text="CPU"/>: Intel i5-7300HQ (4) @ 3.50GHz</li>
                    <li><Cyan text="GPU"/>: Nvidia Geforce GTX 1050</li>
                    <li><Cyan text="Memory"/>: 8192MiB / 4096MiB</li>
                </ul>
            </div>
        )
    }
    
}

export default Neofetch