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
        <div className="flex">
            <a href={trackInfo.url} className="scrobble" target="_blank">
                <div className="flex w-fixed nowrap">
                    <span className="inria-sans-bold">{trackInfo.artist["#text"]}</span>
                    <pre> - </pre>
                    <span>{trackInfo.name}</span>
                </div>
            </a>
        </div>
    );
}