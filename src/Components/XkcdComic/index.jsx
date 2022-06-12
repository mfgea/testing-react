import "./styles.scss";

export const XkcdComic = ({ comicData }) => {
    const { safe_title, alt, img, num, day, month, year } = comicData;
    return (
        <article className="xkcd-comic">
            <header>
                <h1>{safe_title}</h1>
            </header>
            <figure>
                <img src={img} alt={alt} />
                <figcaption>{alt}</figcaption>
            </figure>
            <footer>Comic #{num} - {`${day}/${month}/${year}`}</footer>
        </article>
    )
}