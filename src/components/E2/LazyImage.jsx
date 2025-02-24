import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = imgRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("intersecting!")
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div>
      <img
        ref={imgRef}
        src={isVisible ? src : ""}
        data-src={src}
        alt={alt}
        className="w-full h-auto rounded-lg shadow-md transition-opacity duration-500"
      />
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
