import TopTracks from "../../Pages/TopTracks"
import TopArtists from "../../Pages/TopArtists"
import RecentTracks from "../../Pages/RecentTracks"
import HomePage from "../../Pages/HomePage"

import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/track/top" element={<TopTracks/>}/>
                <Route path="/artist/top" element={<TopArtists/>}/>
                <Route path="/track/recent" element={<RecentTracks/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    )
}