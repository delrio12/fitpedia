export function extractYouTubeId(url) {
  try {
    let videoId = null;
    const urlObj = new URL(url);

    // Caso 1: link normal con ?v=
    if (urlObj.searchParams.has("v")) {
      videoId = urlObj.searchParams.get("v");
    }

    // Caso 2: link corto tipo youtu.be
    if (!videoId && urlObj.hostname.includes("youtu.be")) {
      videoId = urlObj.pathname.substring(1);
    }

    // Caso 3: link embed
    if (!videoId && urlObj.pathname.includes("/embed/")) {
      videoId = urlObj.pathname.split("/embed/")[1];
    }

    return videoId;
  } catch (e) {
    console.error("URL inválida", e);
    return null;
  }
}
