interface TrackProps {
    trackInfo: {
        url: string;
        name: string;
        artist: {
            "#text": string;
        };
    };
}

export default function Track({ trackInfo }: TrackProps) {
    return (
        <a href={trackInfo.url} className="scrobble" target="_blank">
            <div className="flex w-fixed">
                <span className="inria-sans-bold">
                    {trackInfo.artist["#text"]}
                </span>

                <pre> - </pre>

                <span>
                    {trackInfo.name}
                </span>
            </div>
        </a>
    );
}