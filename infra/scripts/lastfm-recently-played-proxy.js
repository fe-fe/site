const LASTFM_USER = "Ela"
const API_URL = "https://ws.audioscrobbler.com/2.0/"
const LIMIT_MAX = 10;

export default {
    async fetch(request, env) {
        const requestUrl = new URL(request.url);
        const limit = (
            Math.min(
                Number(requestUrl.searchParams.get("limit") || LIMIT_MAX),
                LIMIT_MAX
            )
        )
        const url = new URL(API_URL);
        url.searchParams.set("method", "user.getrecenttracks");
        url.searchParams.set("user", LASTFM_USER);
        url.searchParams.set("limit", limit);
        url.searchParams.set("api_key", env.LASTFM_API_KEY);
        url.searchParams.set("format", "json");
        const response = await fetch(url.toString());
        return new Response(response.body, { headers: response.headers });
    }
}