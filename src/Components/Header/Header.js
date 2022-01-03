import './Header.css'

function Header() {
    return (
        <div className='header'>
            <h1 onClick={() => {window.location.href = "/"}}>Spotify Stats</h1>
            <a href='/track/top'>Top Tracks</a>
            <a href="/artist/top">Top Artists</a>
            <a href="/track/recent">Recently played</a>
        </div>
    )
}

export default Header;