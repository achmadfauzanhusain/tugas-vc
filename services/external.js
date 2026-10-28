import callApi from "@/lib/api";

const ROOT_API = "https://gnews.io/api/v4";
const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

export async function topHeadlines({ category = "technology", lang = "en", country = "id", max = 10 } = {}) {
    const params = new URLSearchParams({ category, lang, country, max: String(max), apikey: API_KEY });

    const url = `${ROOT_API}/top-headlines?${params.toString()}`;
    return callApi({
        url,
        method: "GET",
    });
}