import './Header.css'
export default function Header(){
    return(
        <header>
            <img src={`${import.meta.env.BASE_URL}globe.png`} alt="Globe icon" className='logo'/>
            <h1> My Travel Journal</h1>
        </header>
        
    )
}