export async function getRecentlyPlayed() {
    const response = await fetch("https://api.maria.qa/lastfm/recent");
    return await response.json();
}