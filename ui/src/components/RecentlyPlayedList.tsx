import { useEffect, useState } from "react";
import { getRecentlyPlayed } from "../services/lastfm-service";
import Track, { type TrackInfo } from "./Track";


export default function RecentlyPlayedList() {
    const [tracks, setTracks] = useState<TrackInfo[]>([]);

    useEffect(() => {
        getRecentlyPlayed().then((data) => {
            setTracks(data.recenttracks.track);

            requestAnimationFrame(() => {
                window.dispatchEvent(new Event("recently-played-loaded"));
            });
        });
    }, []);

    return (
        <div>
            <div className="flex-column justify-center items-center">
                {tracks.map((trackInfo, index) => (
                    <Track
                        key={index}
                        trackInfo={trackInfo}
                    />
                ))}
            </div>
        </div>
    );
}