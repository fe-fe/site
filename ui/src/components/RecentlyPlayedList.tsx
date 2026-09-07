import { useEffect, useState } from "react";
import { getRecentlyPlayed } from "../services/lastfm-service";
import Track from "./Track";

export default function RecentlyPlayedList() {
    const [tracks, setTracks] = useState<any[]>([]);

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
            <div className="flex-column justify-center align-center">
                {tracks.map((trackInfo) => (
                    <Track
                        key={trackInfo.url}
                        trackInfo={trackInfo}
                    />
                ))}
            </div>
        </div>
    );
}