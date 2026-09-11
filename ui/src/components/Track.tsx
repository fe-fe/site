export interface TrackInfo {
    url: string;
    name: string;
    artist: {
        "#text": string;
    };
    date?: {
        uts: string;
        "#text": string;
    };
    "@attr"?: {
        nowplaying?: string;
    };
}

interface TrackProps {
    trackInfo: TrackInfo;
}

export default function Track({ trackInfo }: TrackProps) {
    return (
        <>
            <a href={trackInfo.url} className="scrobble w-full sm:w-sm" target="_blank">
                <div className="flex justify-between whitespace-nowrap">
                    <div className="inria-sans-bold overflow-hidden text-ellipsis min-w-0 flex-1">{trackInfo.artist["#text"]}</div>
                    <div className="overflow-hidden text-ellipsis min-w-0 flex-1 text-end">{trackInfo.name}</div>
                </div>
            </a>
        </>
    );
}