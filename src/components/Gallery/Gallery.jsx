import { useState } from "react";
import "./Gallery.css";

const photos = [
  
  {
    src: "/images/gallery/workshop-01.jpg",
    title: "Technical Workshop",
    category: "WORKSHOPS",
  },
  {
    src: "/images/gallery/team-01.jpg",
    title: "Our Builder Community",
    category: "COMMUNITY",
  },
  {
    src: "/images/gallery/hackathon-01.jpg",
    title: "Innovation in Action",
    category: "HACKATHONS",
  },
  {
    src: "/images/gallery/event-01.jpg",
    title: "Learning Together",
    category: "EVENTS",
  },
  {
    src: "/images/gallery/event-02.jpg",
    title: "Building the Future",
    category: "COMMUNITY",
  },
  
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) => (current - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % photos.length);
  };

  return (
    <section id="gallery" className="gallery section-dark">
      <div className="gallery__container">
        <div className="gallery__label">
          <span aria-hidden="true">▦</span> GALLERY
        </div>

        <h2 className="gallery__heading">
          Moments That <span>Build Us.</span>
        </h2>

        <p className="gallery__intro">
          A glimpse into our workshops, events, and builder community.
        </p>

        <div className="gallery__stage">
          {photos.map((photo, index) => {
            const offset = (index - active + photos.length) % photos.length;
            const position =
              offset > Math.floor(photos.length / 2)
                ? offset - photos.length
                : offset;

            return (
              <button
                type="button"
                key={photo.src}
                className={`gallery__card ${
                  position === 0 ? "gallery__card--active" : ""
                }`}
                style={{ "--position": position }}
                onClick={() => setActive(index)}
                aria-label={`View ${photo.title}`}
                aria-pressed={position === 0}
                tabIndex={Math.abs(position) > 2 ? -1 : 0}
              >
                <img
                  className="gallery__image"
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                />

                <span className="gallery__shade" />

                <span className="gallery__category">{photo.category}</span>

                <span className="gallery__caption">{photo.title}</span>

                <span className="gallery__card-footer">
                  <span>
                    {position === 0 ? "FEATURED MOMENT" : "VIEW PHOTO"}
                  </span>
                  <span aria-hidden="true">↗</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="gallery__controls">
          <button type="button" onClick={previous} aria-label="Previous photo">
            ←
          </button>

          <span className="gallery__counter">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(photos.length).padStart(2, "0")}
          </span>

          <button type="button" onClick={next} aria-label="Next photo">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
